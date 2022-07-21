/* const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content); */

const container = document.querySelector('#container');

const paragraph = document.createElement('p');
paragraph.style.color = 'red';
paragraph.textContent = 'Hey I`m red!';

const header3 = document.createElement('h3');
header3.style.color = 'blue';
header3.textContent = 'I am a blue h3!';

const div = document.createElement('div');
div.style.borderColor = 'black';
div.style.backgroundColor = 'pink';

container.appendChild(paragraph);
container.appendChild(header3);
container.appendChild(div);