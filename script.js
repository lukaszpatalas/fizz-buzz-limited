/* const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content); */

const container = document.querySelector('#container');

const paragraph1 = document.createElement('p');
paragraph1.style.color = 'red';
paragraph1.textContent = 'Hey I`m red!';

const header3 = document.createElement('h3');
header3.style.color = 'blue';
header3.textContent = 'I am a blue h3!';

const div = document.createElement('div');
div.style.borderColor = 'black';
div.style.backgroundColor = 'pink';

const header1 = document.createElement('h1');
header1.textContent = 'I am in a div';



container.appendChild(paragraph1);
container.appendChild(header3);
container.appendChild(div);