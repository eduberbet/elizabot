/*
  app.js - Orquestrador da Interface do Usuário (Frontend)
*/

import ElizaBot from './elizaEngine.js';
import elizaData from './elizadata.js';

let eliza;

function initApp() {
  // Instancia a ELIZA injetando o dicionário de dados em português
  eliza = new ElizaBot(elizaData);

  const form = document.querySelector('.chat-input-area');
  const inputEl = document.getElementById('userInput');
  const btnReset = document.querySelector('.btn-secondary');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSend();
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      resetChat();
    });
  }

  resetChat();
}

function resetChat() {
  eliza.reset();
  const display = document.getElementById('chatDisplay');
  if (display) {
    display.innerHTML = '';
    appendMessage('ELIZA', eliza.getInitial(), 'bot');
  }
  const inputEl = document.getElementById('userInput');
  if (inputEl) inputEl.focus();
}

function appendMessage(sender, text, type) {
  const display = document.getElementById('chatDisplay');
  if (!display) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${type}`;

  const senderDiv = document.createElement('div');
  senderDiv.className = 'sender';
  senderDiv.innerText = sender;

  const textDiv = document.createElement('div');
  textDiv.innerText = text;

  msgDiv.appendChild(senderDiv);
  msgDiv.appendChild(textDiv);

  display.appendChild(msgDiv);
  display.scrollTop = display.scrollHeight;
}

function handleSend() {
  const inputEl = document.getElementById('userInput');
  if (!inputEl) return;

  const userinput = inputEl.value.trim();

  if (eliza.quit) {
    inputEl.value = '';
    if (confirm('Esta sessão acabou.\nDeseja reiniciar?')) {
      resetChat();
    }
    inputEl.focus();
    return;
  }

  if (userinput !== '') {
    appendMessage('Você', userinput, 'user');
    inputEl.value = '';

    const reply = eliza.transform(userinput);
    appendMessage('ELIZA', reply, 'bot');
  }

  inputEl.focus();
}

// Inicializa a aplicação ao carregar o DOM
document.addEventListener('DOMContentLoaded', initApp);
