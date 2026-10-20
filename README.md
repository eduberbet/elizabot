# Eliza Bot (Versão em Português)

Projeto baseado na biblioteca clássica JavaScript de Norbert Landsteiner (2005), replicando o famoso programa **ELIZA** criado por Joseph Weizenbaum no MIT (1966).

> **Projeto original:** [http://www.masswerk.at/elizabot/](http://www.masswerk.at/elizabot/)

---

## 🚀 Roadmap do Projeto

- [x] **Fase 1: Tradução e Localização (Concluída)**
  - Tradução completa do dicionário de palavras-chave, regras, sinônimos e pronomes (`elizadata.js`) para o Português do Brasil.
  - Adaptação dos fluxos de teste e diálogos históricos de Weizenbaum (`eliza_test.html`).
  - Tradução da interface de usuário e documentação técnica (`index.html`).
  - Ajustes de pontuação e separadores de frase no motor (`elizabot.js`).

- [x] **Fase 2: Refatoração, Modularização e Frontend (Concluída)**
  - Atualização do código para JavaScript Moderno (ES6+ Classes em `elizaEngine.js`).
  - Separação de responsabilidades em módulos (`import`/`export`), desacoplando o motor da interface.
  - Redesign completo da interface de usuário (`style.css`) em formato de chat moderno.
  - Atualização do `app.js` e do `eliza_test.html` para consumir o motor modularizado sem dependências globais.

- [ ] **Fase 3: Eliza 2.0 (Evolução do Motor & Contexto Emocional)**
  - Animação e efeito visual de "ELIZA está digitando...".
  - Suporte a Regex moderno com *Named Capture Groups* e normalização de acentos/diacríticos.
  - **Sistema de Memória & Contexto Inteligente:**
    - Armazenamento no `localStorage` com teto de 20 interações.
    - **Variáveis de Estado Emocional / Humor:** Mapeamento do sentimento do usuário (ex: feliz, triste) para modular a interpretação de frases ambíguas/figuradas.
    - **Entidades e Relações:** Mapeamento de pessoas citadas (ex: namorado, mãe) e tópicos centrais.
    - **Nível de Engajamento:** Detecção de respostas curtas para adaptar a postura do bot.

---

## 🛠️ Como Executar

Por utilizar módulos nativos do ES6 (`import`/`export`), execute a aplicação através de um servidor web local.

1. Faça o download ou clone este repositório.
2. Inicie um servidor HTTP simples na pasta do projeto (ex: extensão *Live Server* no VS Code ou executando `npx serve` / `python -m http.server`).
3. Abra `index.html` para conversar com a ELIZA ou `eliza_test.html` para o teste histórico.

---

## 📁 Estrutura dos Arquivos

* `index.html`: Interface gráfica principal do chat.
* `eliza_test.html`: Aplicação de teste com o diálogo histórico de 1966.
* `style.css`: Estilização visual moderna e responsiva em balões de conversa.
* `elizaEngine.js`: O motor do chatbot refatorado em Classe ES6.
* `elizadata.js`: O dicionário de regras e dados exportado como módulo ES6.
* `app.js`: Orquestrador da interface gráfica e manipulação do DOM.