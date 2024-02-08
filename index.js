const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para estilizar páginas web",
        "Um sistema operacional",
        "Uma linguagem de programação para desenvolvimento web e outros tipos de aplicativos",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "var = minhaVariavel;",
        "variable minhaVariavel;",
        "var minhaVariavel;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o método em JavaScript usado para imprimir algo no console?",
      respostas: [
        "console.log()",
        "print()",
        "log.console()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara dois valores para igualdade, sem verificar o tipo",
        "Compara dois valores para igualdade, verificando o tipo",
        "Atribui um valor a uma variável",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Seleciona todos os elementos do documento",
        "Seleciona o primeiro elemento que corresponde a um seletor especificado",
        "Seleciona um elemento aleatório do documento",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de uma linha",
        "<!-- Este é um comentário de uma linha -->",
        "/* Este é um comentário de uma linha */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Define uma ação a ser executada quando um evento ocorre em um elemento HTML",
        "Adiciona um elemento ao final de uma lista",
        "Atualiza o conteúdo de um elemento HTML",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de negação lógica em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: [
        "'10'",
        "10",
        "Erro",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de comparar duas variáveis em JavaScript?",
      respostas: [
        "comparar(var1, var2)",
        "var1 == var2",
        "var1.equals(var2)",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const quizItem = template.content.cloneNode(true) 
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  //true or false-Buliano
  
  
  
  //loop´ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta 
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').anchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
  
      
      
      quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dl dt').remove()
  
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }