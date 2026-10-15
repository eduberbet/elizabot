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

- [ ] **Fase 2: Refatoração e Modularização**
  - Atualização do código para JavaScript Moderno (ES6+ Classes).
  - Separação de responsabilidades em módulos (`import`/`export`), criando uma biblioteca/motor desacoplado e reutilizável em outros projetos.
  - Otimização do gerenciamento de estado e eliminação de variáveis globais.

- [ ] **Fase 3: Eliza 2.0 (Evolução do Motor & Contexto Emocional)**
  - Redesign completo da interface (UI responsiva no estilo chat moderno com efeito "digitando...").
  - Suporte a Regex moderno com *Named Capture Groups* e normalização de acentos.
  - **Sistema de Memória & Contexto Inteligente:**
    - Armazenamento no `localStorage` limitado a um teto fixo de 20 interações para evitar acúmulo desnecessário.
    - **Variáveis de Estado Emocional / Humor:** Mapeamento e retenção do sentimento do usuário (ex: feliz, triste, deprimido) para modular a interpretação de frases ambíguas/figuradas.
    - **Entidades e Relações:** Mapeamento de pessoas relevantes citadas (ex: namorado, mãe) e tópicos centrais.
    - **Nível de Engajamento:** Percepção de respostas curtas para adaptar a postura do bot.

---

## 🛠️ Como Executar

Não é necessária nenhuma instalação ou compilação complexa.

1. Faça o download ou clone este repositório.
2. Abra o arquivo `index.html` em qualquer navegador web moderno para conversar com a ELIZA.
3. Para testar o diálogo histórico de 1966 passo a passo, abra o arquivo `eliza_test.html`.

---

## 📁 Estrutura dos Arquivos

* `index.html`: Interface principal de conversação e documentação técnica.
* `eliza_test.html`: Aplicação de teste que executa o script de exemplo original em português.
* `elizabot.js`: O motor de execução e regras do chatbot.
* `elizadata.js`: O dicionário de dados contendo palavras-chave, sinônimos e padrões de resposta em português.
