// Dicionário de Dados em Português exportado como Módulo ES6

const elizaInitials = [
  "Olá. Por favor, conte-me qual é o seu problema.",
  "Por favor, diga-me o que tem te incomodado.",
  "Há algo te perturbando?"
];

const elizaFinals = [
  "Tchau. Foi muito bom conversar com você.",
  "Até logo. Esta foi uma boa conversa.",
  "Até mais. Estou ansioso pela nossa próxima sessão.",
  "Esta foi uma boa sessão, não foi? Mas nosso tempo acabou. Até logo.",
  "Talvez possamos discutir mais sobre isso em nossa próxima sessão? Até logo."
];

const elizaQuits = [
  "tchau",
  "adeus",
  "sair",
  "fim",
  "chega",
  "quit",
  "exit"
];

const elizaPres = [
  "vc", "você",
  "vcs", "vocês",
  "tb", "também",
  "tbm", "também",
  "pq", "porque",
  "eh", "é",
  "nao", "não",
  "tô", "estou",
  "to", "estou",
  "ta", "está",
  "está", "está",
  "computadores", "computador",
  "máquinas", "computador",
  "máquina", "computador",
  "mesmo", "igual",
  "idêntico", "igual",
  "equivalente", "igual"
];

const elizaPosts = [
  "estou", "está",
  "meu", "seu",
  "minha", "sua",
  "meus", "seus",
  "minhas", "suas",
  "mim", "você",
  "me", "te",
  "eu", "você",
  "você", "eu", "consigo", "consigo"
];

const elizaSynons = {
  "ser": ["sou", "é", "era", "fui", "estou", "está", "estava"],
  "pensar": ["acho", "penso", "sinto", "acredito", "desejo"],
  "impossivel": ["não consigo", "não posso"],
  "desejo": ["quero", "preciso", "gostaria"],
  "todos": ["todo mundo", "ninguém", "nenhum"],
  "família": ["mãe", "pai", "irmão", "irmã", "esposa", "marido", "filho", "filha", "madrasta", "padrasto"],
  "feliz": ["alegre", "contente", "satisfeito", "bem"],
  "triste": ["infeliz", "deprimido", "chateado", "mal", "desanimado"]
};

const elizaKeywords = [
  ["xnone", 0, [
   ["*", [
       "Não tenho certeza se entendi totalmente.",
       "Por favor, continue.",
       "O que isso sugere para você?",
       "Você se sente fortemente motivado a discutir tais coisas?",
       "Isso é interessante. Por favor, continue.",
       "Me conte mais sobre isso.",
       "Falar sobre isso te incomoda?"
    ]]
  ]],
  ["desculpe", 0, [
   ["*", [
       "Por favor, não se desculpe.",
       "Desculpas não são necessárias.",
       "Já lhe disse que não precisa pedir desculpas.",
       "Isso não me incomodou. Por favor, continue."
    ]]
  ]],
  ["desculpa", 0, [
   ["*", [
       "goto desculpe"
    ]]
  ]],
  ["lembro", 5, [
   ["* eu me lembro de *", [
       "Você pensa frequentemente em (2)?",
       "Lembrar de (2) te traz algo mais à mente?",
       "O que mais você se recorda?",
       "Por que você se lembra de (2) logo agora?",
       "O que na situação atual te lembra de (2)?",
       "Qual é a relação entre mim e (2)?",
       "O que mais (2) te faz lembrar?"
    ]],
   ["* você se lembra de *", [
       "Você achou que eu esqueceria (2)?",
       "Por que acha que eu deveria me recordar de (2) agora?",
       "O que tem (2)?",
       "goto que",
       "Você mencionou (2)?"
    ]]
  ]],
  ["esqueci", 5, [
   ["* eu esqueci *", [
       "Pensa em algum motivo pelo qual você esqueceria (2)?",
       "Por que você não consegue se lembrar de (2)?",
       "Com que frequência você pensa em (2)?",
       "Isso te incomoda esquecer isso?",
       "Poderia ser um bloqueio mental?",
       "Você costuma ser esquecido?",
       "Acha que está suprimindo (2)?"
    ]]
  ]],
  ["se", 3, [
   ["* se *", [
       "Acha provável que (2)?",
       "Você deseja que (2)?",
       "O que você sabe sobre (2)?",
       "Sério, se (2)?",
       "O que você faria se (2)?",
       "Mas quais são as chances de que (2)?",
       "Aonde essa especulação nos leva?"
    ]]
  ]],
  ["sonhei", 4, [
   ["* eu sonhei com *", [
       "Sério, (2)?",
       "Você já fantasiou sobre (2) enquanto estava acordado?",
       "Você já tinha sonhado com (2) antes?",
       "goto sonho"
    ]]
  ]],
  ["sonho", 3, [
   ["*", [
       "O que esse sonho sugere a você?",
       "Você sonha com frequência?",
       "Quais pessoas aparecem em seus sonhos?",
       "Você acredita que os sonhos têm algo a ver com seu problema?"
    ]]
  ]],
  ["talvez", 0, [
   ["*", [
       "Você não parece muito certo.",
       "Por que esse tom de incerteza?",
       "Não pode ser mais positivo?",
       "Você não tem certeza?",
       "Você não sabe?",
       "Qual a probabilidade, na sua estimativa?"
    ]]
  ]],
  ["nome", 15, [
   ["*", [
       "Não estou interessado em nomes.",
       "Já lhe disse antes, não me importo com nomes — por favor, continue."
    ]]
  ]],
  ["ola", 0, [
   ["*", [
       "Como vai? Por favor, exponha seu problema.",
       "Olá. Qual parece ser o seu problema?"
    ]]
  ]],
  ["oi", 0, [
   ["*", [
       "goto ola"
    ]]
  ]],
  ["computador", 50, [
   ["*", [
       "Os computadores te preocupam?",
       "Por que você menciona computadores?",
       "O que você acha que as máquinas têm a ver com o seu problema?",
       "Não acha que os computadores podem ajudar as pessoas?",
       "O que nas máquinas te preocupa?",
       "O que você pensa sobre as máquinas?",
       "Você não acha que eu sou um programa de computador, acha?"
    ]]
  ]],
  ["sou", 0, [
   ["* eu sou *", [
       "Por que você diz que é (2)?",
       "Há quanto tempo você é (2)?",
       "Acredita que seja normal ser (2)?",
       "Gosta de ser (2)?",
       "Conhece mais alguém que seja (2)?"
    ]]
  ]],
  ["esta", 0, [
   ["* voce esta *", [
       "Por que está interessado em saber se estou (2) ou não?",
       "Preferiria se eu não estivesse (2)?",
       "Talvez eu esteja (2) nas suas fantasias.",
       "Você às vezes pensa que estou (2)?",
       "goto que",
       "Isso importaria para você?",
       "E se eu estivesse (2)?"
    ]]
  ]],
  ["seu", 0, [
   ["* seu *", [
       "Por que se preocupa com o meu (2)?",
       "E quanto ao seu próprio (2)?",
       "Está preocupado com o (2) de outra pessoa?",
       "Sério, o meu (2)?",
       "O que te faz pensar no meu (2)?",
       "Você quer o meu (2)?"
    ]]
  ]],
  ["sua", 0, [
   ["*", [
       "goto seu"
    ]]
  ]],
  ["era", 2, [
   ["* eu era *", [
       "Você era mesmo?",
       "Por que me diz que era (2) agora?",
       "Talvez eu já soubesse que você era (2)."
    ]]
  ]],
  ["eu", 0, [
   ["* eu @desejo *", [
       "O que significaria para você se conseguisse (3)?",
       "Por que você quer (3)?",
       "Suponha que conseguisse (3) em breve.",
       "E se você nunca conseguisse (3)?",
       "O que conseguir (3) significaria para você?",
       "O que querer (3) tem a ver com esta discussão?"
    ]],
   ["* eu estou* @triste *", [
       "Lamento saber que você está (3).",
       "Acha que vir aqui te ajudará a não ficar (3)?",
       "Tenho certeza de que não é agradável estar (3).",
       "Pode explicar o que te deixou (3)?"
    ]],
   ["* eu estou* @feliz *", [
       "Como eu te ajudei a ficar (3)?",
       "Seu tratamento te deixou (3)?",
       "O que te deixa (3) agora?",
       "Pode explicar por que está de repente (3)?"
    ]],
   ["* eu @pensar eu *", [
       "Você realmente acha isso?",
       "Mas você não tem certeza de que (3).",
       "Você realmente duvida que (3)?"
    ]],
   ["* eu @impossivel *", [
       "Como você sabe que não consegue (3)?",
       "Você já tentou?",
       "Talvez pudesse (3) agora.",
       "Você realmente quer ser capaz de (3)?",
       "E se você pudesse (3)?"
    ]],
   ["* eu nao *", [
       "Você realmente não (2)?",
       "Por que você não (2)?",
       "Deseja ser capaz de (2)?",
       "Isso te perturba?"
    ]],
   ["* eu sinto *", [
       "Me conte mais sobre esses sentimentos.",
       "Com que frequência se sente (2)?",
       "Gosta de se sentir (2)?",
       "Do que sentir (2) te lembra?"
    ]],
   ["*", [
       "Você diz (1)?",
       "Pode detalhar mais sobre isso?",
       "Diz (1) por algum motivo especial?",
       "Isso é bastante interessante."
    ]]
  ]],
  ["voce", 0, [
   ["* voce me lembra *", [
       "goto igual"
    ]],
   ["* voce e *", [
       "O que te faz pensar que sou (2)?",
       "Te agrada acreditar que sou (2)?",
       "Às vezes deseja ser (2)?",
       "Talvez você gostaria de ser (2)."
    ]],
   ["* voce * mim *", [
       "Por que acha que eu (2) você?",
       "Gosta de pensar que eu (2) você — não é?",
       "O que te faz pensar que eu (2) você?",
       "Sério, eu (2) você?",
       "Deseja acreditar que eu (2) você?",
       "Suponha que eu (2) você — o que isso significaria?",
       "Mais alguém acredita que eu (2) você?"
    ]],
   ["* voce *", [
       "Estávamos discutindo você — não eu.",
       "Ah, eu (2)?",
       "Você não está realmente falando de mim — está?",
       "Quais são seus sentimentos agora?"
    ]]
  ]],
  ["sim", 0, [
   ["*", [
       "Você parece bastante positivo.",
       "Você tem certeza.",
       "Entendo.",
       "Compreendo."
    ]]
  ]],
  ["nao", 0, [
   ["* ninguem *", [
       "Tem certeza de que ninguém (2)?",
       "Com certeza alguém (2).",
       "Pode pensar em absolutamente qualquer pessoa?",
       "Está pensando em uma pessoa muito especial?",
       "Quem, posso perguntar?",
       "Você tem uma pessoa específica em mente, não tem?",
       "De quem você acha que está falando?"
    ]],
   ["*", [
       "Está dizendo 'não' apenas para ser negativo?",
       "Você está sendo um pouco negativo.",
       "Por que não?",
       "Por que 'não'?"
    ]]
  ]],
  ["meu", 2, [
   ["$ * meu *", [
       "Isso tem algo a ver com o fato de seu (2)?",
       "Vamos discutir mais sobre o motivo de seu (2).",
       "Antes você disse seu (2).",
       "Mas o seu (2)."
    ]],
   ["* meu* @família *", [
       "Me conte mais sobre sua família.",
       "Quem mais na sua família (4)?",
       "Seu (3)?",
       "O que mais vem à sua mente quando pensa em seu (3)?"
    ]],
   ["* meu *", [
       "Seu (2)?",
       "Por que diz seu (2)?",
       "Isso sugere algo mais que pertence a você?",
       "É importante para você que seu (2)?"
    ]]
  ]],
  ["minha", 2, [
   ["*", [
       "goto meu"
    ]]
  ]],
  ["pode", 0, [
   ["* voce pode *", [
       "Acredita que eu posso (2), não é?",
       "goto que",
       "Quer que eu seja capaz de (2).",
       "Talvez gostaria de ser capaz de (2) você mesmo."
    ]],
   ["* eu posso *", [
       "Se você pode ou não (2) depende mais de você do que de mim.",
       "Você quer ser capaz de (2)?",
       "Talvez você não queira (2).",
       "goto que"
    ]]
  ]],
  ["que", 0, [
   ["*", [
       "Por que você pergunta?",
       "Essa pergunta te interessa?",
       "O que você realmente quer saber?",
       "Essas perguntas estão muito na sua cabeça?",
       "Qual resposta te agradaria mais?",
       "O que você acha?",
       "O que vem à mente quando pergunta isso?",
       "Já fez perguntas semelhantes antes?",
       "Perguntou a mais alguém?"
    ]]
  ]],
  ["quem", 0, [
   ["quem *", [
       "goto que"
    ]]
  ]],
  ["quando", 0, [
   ["quando *", [
       "goto que"
    ]]
  ]],
  ["onde", 0, [
   ["onde *", [
       "goto que"
    ]]
  ]],
  ["como", 0, [
   ["como *", [
       "goto que"
    ]]
  ]],
  ["porque", 0, [
   ["*", [
       "Esse é o verdadeiro motivo?",
       "Nenhum outro motivo vem à mente?",
       "Esse motivo parece explicar algo mais?",
       "Quais outros motivos poderiam existir?"
    ]]
  ]],
  ["por que", 0, [
   ["*", [
       "goto que"
    ]]
  ]],
  ["porquê", 0, [
   ["*", [
       "goto que"
    ]]
  ]],
  ["sempre", 1, [
   ["*", [
       "Pode pensar em um exemplo específico?",
       "Quando?",
       "Em qual incidente está pensando?",
       "Sério, sempre?"
    ]]
  ]],
  ["igual", 10, [
   ["*", [
       "De que maneira?",
       "Qual semelhança você vê?",
       "O que essa semelhança sugere a você?",
       "Quais outras conexões você vê?",
       "O que você supõe que essa semelhança significa?",
       "Qual é a relação, você supõe?",
       "Poderia realmente haver alguma conexão?",
       "Como?"
    ]]
  ]],
  ["como", 10, [
   ["* @ser *como *", [
       "goto igual"
    ]]
  ]],
  ["diferente", 0, [
   ["*", [
       "Como é diferente?",
       "Quais diferenças você vê?",
       "O que essa diferença sugere a você?",
       "Quais outras distinções você vê?",
       "O que supõe que essa disparidade significa?",
       "Poderia haver alguma conexão, você acha?",
       "Como?"
    ]]
  ]]
];

const elizaPostTransforms = [
  / velhos velhos/g, " velhos",
  /\beles eram( não)? mim\b/g, "foi$1 eu",
  /\beles são( não)? mim\b/g, "sou$1 eu"
];

// Exportação unificada para o construtor do ElizaBot
export default {
  initials: elizaInitials,
  finals: elizaFinals,
  quits: elizaQuits,
  pres: elizaPres,
  posts: elizaPosts,
  synons: elizaSynons,
  keywords: elizaKeywords,
  postTransforms: elizaPostTransforms
};
