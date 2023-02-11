// I have used action types both in variables and directly in action creators, to reduce chances of typos

// action types
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// action creators
function addTodo(text) {
  return { type: ADD_TODO, text };
}

function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}

// reducer
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
}

// store
import { createStore } from 'redux';
const store = createStore(todos);

// React component
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function TodoList() {
  const todos = useSelector(state => state);
  const dispatch = useDispatch();

  function handleAddTodo(text) {
    dispatch(addTodo(text));
  }

  function handleToggleTodo(index) {
    dispatch(toggleTodo(index));
  }

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        handleAddTodo(e.target.todo.value);
        e.target.todo.value = '';
      }}>
        <input type="text" name="todo" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggleTodo(index)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}