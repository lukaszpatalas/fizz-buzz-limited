import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

// createSlice
const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      state[action.payload].completed = !state[action.payload].completed;
    }
  }
});

// action creators
const { addTodo, toggleTodo } = todoSlice.actions;

// store
const store = configureStore({
  reducer: todoSlice.reducer
});

// React component
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
      <form
        onSubmit={e => {
          e.preventDefault();
          handleAddTodo(e.target.todo.value);
          e.target.todo.value = '';
        }}
      >
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

export default function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}
