console.log('It not works!');

const messages = [];
let count = 0;

function addMessage() {
  messages.push('Hello, friend!');
  document.querySelector('.message').innerHTML = `<p>${messages[count]}<p>`;
  count++;
}

document.querySelector('button').onclick = addMessage;
