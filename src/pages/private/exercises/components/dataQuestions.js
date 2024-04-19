export const dataQuestions = {
  data: {
    id: "66227d89139d33d914d60cdd",
    startedAt: "2024-04-19T14:19:53.717Z",
    endedAt: "",
    tenant: "estacio",
    theme: {
      name: "LISTAS, PILHAS E FILAS",
      code: "00786",
    },
    questions: [
      {
        id: "654d3a12134266c159715786",
        description:
          '<p>L<span>evando em consideração a estrutura de dados do tipo "Pilha", analise os itens a seguir e, ao final, assinale a alternativa correta:</span></p>\n<p><span>I- Um elemento a ser removido é o que está há menos tempo na estrutura de dados.</span></p>\n<p><span>II- Um elemento a ser removido é o que está há mais tempo na estrutura de dados.</span></p>\n<p><span>III- Um elemento a ser inserido é colocado na base da pilha.</span></p>',
        alternatives: [
          {
            id: "65b121979ca9510b178201a2",
            description: "<p><span>Apenas o item I é verdadeiro.</span></p>",
          },
          {
            id: "65b121979ca9510b178201a3",
            description: "<p><span>Apenas o item II é verdadeiro.</span></p>",
          },
          {
            id: "65b121979ca9510b178201a4",
            description: "<p><span>Apenas o item III é verdadeiro.</span></p>",
          },
          {
            id: "65b121979ca9510b178201a5",
            description:
              "<p><span>Apenas os itens II e III são verdadeiros.</span></p>",
          },
          {
            id: "65b121979ca9510b178201a6",
            description:
              "<p><span>Apenas os itens I e II são verdadeiros</span></p>",
          },
        ],
        isMarkedForReview: false,
        selectedAnswer: "",
      },
      {
        id: "654d3a1f134266c1597164a2",
        description:
          "<p>Uma lista ordenada alocada sequencialmente possui como desvantagem:</p>",
        alternatives: [
          {
            id: "65b127729ca9510b1782c978",
            description: "<p>Complexidade O(n) para a busca.</p>",
          },
          {
            id: "65b127729ca9510b1782c979",
            description: "<p>Impossibilidade de remoção no meio da lista.</p>",
          },
          {
            id: "65b127729ca9510b1782c97a",
            description:
              "<p>Tamanho limitado de memória alocada para lista.</p>",
          },
          {
            id: "65b127729ca9510b1782c97b",
            description: "<p>Impossibilidade de acesso direto.</p>",
          },
          {
            id: "65b127729ca9510b1782c97c",
            description: "<p>A reserva de memória em posições contíguas.</p>",
          },
        ],
        isMarkedForReview: false,
        selectedAnswer: "",
      },
      {
        id: "654d3c26134266c159735f08",
        description:
          "<p>(IBADE/2022) Uma estrutura de dados onde existe uma coleção ordenada de entidades sendo a metodologia de busca com base no deslocamento relativo ao primeiro (cabeça) da coleção, chama-se:</p>",
        alternatives: [
          {
            id: "65b120299ca9510b1781d0b6",
            description: "<p>Árvore.</p>",
          },
          {
            id: "65b120299ca9510b1781d0b7",
            description: "<p>Lista.</p>",
          },
          {
            id: "65b120299ca9510b1781d0b8",
            description: "<p>Pilha.</p>",
          },
          {
            id: "65b120299ca9510b1781d0b9",
            description: "<p>Fila.</p>",
          },
          {
            id: "65b120299ca9510b1781d0ba",
            description: "<p>Árvore binária.</p>",
          },
        ],
        isMarkedForReview: false,
        selectedAnswer: "",
      },
      {
        id: "654d3a1f134266c159716496",
        description:
          '<p>Uma pilha segue a regra: "o último a chegar é o primeiro a sair". Já as filas obedecem à regra: o primeiro a chegar é o primeiro a sair. Com base nesses argumentos,</p>\n<p>Uma pilha P e uma fila F originalmente com n elementos cada (n > 5), onde suas operações são:</p>\n<p>empilha(P, elemento): insere elemento na pilha P;</p>\n<p>desempilha(P): remove da pilha P e retorna o elemento removido;</p>\n<p>enfileira(F, elemento): insere elemento na fila F;</p>\n<p>desenfileira(F): remove da fila F e retorna o elemento removido;</p>\n<p>para i = 1 até n, faça</p>\n<p>empilha(P, desempilha(P))</p>\n<p>enfileira(F, desenfileira(F))</p>\n<p>fim-para</p>\n<p>Ao final da execução do pseudocódigo, os estados finais de P e F serão respectivamente:</p>',
        alternatives: [
          {
            id: "65b1144fc3b1544ce7c86114",
            description:
              "<p>Elementos em ordem original e elementos em ordem original.</p>",
          },
          {
            id: "65b1144fc3b1544ce7c86115",
            description:
              "<p>Elementos em ordem inversa e elementos em ordem inversa.</p>",
          },
          {
            id: "65b1144fc3b1544ce7c86116",
            description:
              "<p>Elementos em ordem original e elementos em ordem inversa.</p>",
          },
          {
            id: "65b1144fc3b1544ce7c86117",
            description:
              "<p>Elementos em ordem inversa e elementos em ordem original.</p>",
          },
          {
            id: "65b1144fc3b1544ce7c86118",
            description: "<p>Ambas as estruturas estarão vazias.</p>",
          },
        ],
        isMarkedForReview: false,
        selectedAnswer: "",
      },
      {
        id: "654d3c26134266c159735f14",
        description:
          "<p>(FCC/ 2013) Insira os dados de entrada numa fila. Em seguida, retire cada dado da fila e insira numa pilha. Mostre a pilha. Depois retire os dados da pilha e insira na fila. Mostre a fila.</p>\r\n<p> </p>\r\n<p>Dados de entrada: 11, 12, 23, 14, 25, 50, 8, 18, 29, 10</p>\r\n<p> </p>\r\n<p>As estruturas mostradas ficam</p>\r\n<p> </p>\r\n<p>I. Pilha: (topo) 10 - 29 - 18 - 8 - 50 - 25 - 14 - 23 - 12 - 11</p>\r\n<p> </p>\r\n<p>II. Fila: (começo) 11 - 12 - 23 - 14 - 25 - 50 - 8 - 18 - 29 - 10 (fim)</p>\r\n<p> </p>\r\n<p>III. Fila: (começo) 10 - 29 - 18 - 8 - 50 - 25 - 14 - 23 - 12 - 11 (fim)</p>\r\n<p> </p>\r\n<p>IV. Pilha: (topo) 11 - 12 - 23 - 14 - 25 - 50 - 8 - 18 - 29 - 10</p>\r\n<p> </p>\r\n<p>V. A fila mostrada fica com os elementos em ordem invertida dos dados de entrada</p>\r\n<p><br />\r\nEstá correto o que se afirma APENAS em:</p>\r",
        alternatives: [
          {
            id: "65ea4cd070af74373849d35d",
            description:
              '<p><span ><span style="color:black">III e IV.</span></span></p>\r',
          },
          {
            id: "65ea4cd070af74373849d35e",
            description: "<p>II e IV.</p>\r",
          },
          {
            id: "65ea4cd070af74373849d35f",
            description: "<p>I, II e III.</p>\r",
          },
          {
            id: "65ea4cd070af74373849d360",
            description: "<p>I, III e V.</p>\r",
          },
          {
            id: "65ea4cd070af74373849d361",
            description: "<p>I, IV e V.</p>\r",
          },
        ],
        isMarkedForReview: false,
        selectedAnswer: "",
      },
      {
        id: "654d3a12134266c159715792",
        description:
          "<p><span >Sobre listas duplamente encadeadas, afirma-se: </span></p>\n<p><span >I) Cada nó usa o dobro do número de campos ponteiro de uma lista simplesmente encadeada. </span></p>\n<p><span >II) A complexidade de remoção é metade da complexidade de remoção em lista simplesmente encadeada. </span></p>\n<p><span >III) Não permitem a inserção de nó no meio da lista. </span></p>\n<p><span >É correto apenas: </span></p>",
        alternatives: [
          {
            id: "65b137e955fefcc52fd61a89",
            description: "<p><span >I. </span></p>",
          },
          {
            id: "65b137e955fefcc52fd61a8a",
            description: "<p><span >II. </span></p>",
          },
          {
            id: "65b137e955fefcc52fd61a8b",
            description: "<p><span >III. </span></p>",
          },
          {
            id: "65b137e955fefcc52fd61a8c",
            description: "<p><span >I e III. </span></p>",
          },
          {
            id: "65b137e955fefcc52fd61a8d",
            description: "<p><span >II e III. </span></p>",
          },
        ],
        isMarkedForReview: false,
        selectedAnswer: "",
      },
      {
        id: "654d3a12134266c15971578c",
        description:
          "<p><span >Sejam as seguintes propriedades de estruturas de dados:</span></p>\n<p><span >I- a remoção de um elemento interno obriga ao deslocamento de todos os sucessores.</span></p>\n<p><span >II- Um nó pode ser inserido no meio da estrutura com complexidade O (1).</span></p>\n<p><span >III- a inserção e a remoção podem ser feitas em ambas as extremidades.</span></p>\n<p><span >As descrições acima se referem respectivamente à:</span></p>",
        alternatives: [
          {
            id: "65b1167cc3b1544ce7c8c11c",
            description:
              "<p><span >Lista em alocação encadeada, Lista circular e Lista em alocação sequencial.</span></p>",
          },
          {
            id: "65b1167cc3b1544ce7c8c11d",
            description:
              "<p><span >Lista em alocação encadeada, Lista em alocação sequencial e deque.</span></p>",
          },
          {
            id: "65b1167cc3b1544ce7c8c11e",
            description:
              "<p><span >Lista em alocação sequencial, Lista circular e Lista em alocação encadeada.</span></p>",
          },
          {
            id: "65b1167cc3b1544ce7c8c11f",
            description:
              "<p><span >Lista em alocação sequencial, Lista em alocação encadeada e deque.</span></p>",
          },
          {
            id: "65b1167cc3b1544ce7c8c120",
            description:
              "<p><span >Lista em alocação sequencial, Lista em alocação sequencial e deque.</span></p>",
          },
        ],
        isMarkedForReview: false,
        selectedAnswer: "",
      },
      {
        id: "654d3a1f134266c159716466",
        description:
          "<p>Várias estruturas de dados podem ser utilizadas para armazenar dados de uma aplicação. Em relação ao assunto, assinale a alternativa correta.</p>",
        alternatives: [
          {
            id: "65b12daf55fefcc52fd4a283",
            description:
              "<p>A estrutura de dados do tipo pilha sempre retira os elementos que foram inseridos primeiro na estrutura.</p>",
          },
          {
            id: "65b12daf55fefcc52fd4a284",
            description:
              "<p>A estrutura de dados do tipo lista utiliza a ideia do primeiro a chegar, primeiro a ser servido para inserir elementos.</p>",
          },
          {
            id: "65b12daf55fefcc52fd4a285",
            description:
              "<p>A estrutura de dados do tipo fila sempre retira os elementos que entraram por último na fila.</p>",
          },
          {
            id: "65b12daf55fefcc52fd4a286",
            description:
              "<p>A estrutura de dados do tipo pilha, para retirar o elemento do topo da pilha, é necessário retirar o elemento da base da pilha.</p>",
          },
          {
            id: "65b12daf55fefcc52fd4a287",
            description:
              "<p>A estrutura de dados do tipo fila utiliza a ideia do primeiro a ser inserido, será o primeiro a ser retirado.</p>",
          },
        ],
        isMarkedForReview: false,
        selectedAnswer: "",
      },
      {
        id: "654d3a1f134266c1597164c0",
        description:
          '<p><span style="background-color:white"><span style="color:#202124">O acesso ao elemento de uma estrutura de dados tipo pilha se restringe ao mais recente na pilha. Já o acesso a um elemento de uma estrutura tipo fila ocorre ao dado há mais tempo na fila. Sobre pilhas e filas, avalie as assertivas a seguir:</span></span></p>\n<p><span style="background-color:white"><span style="color:#202124">I - Uma forma de evitar o desperdício de memória numa fila em alocação sequencial é utilizar-se lista circular.</span></span></p>\n<p><span style="background-color:white"><span style="color:#202124">II - Em uma pilha em alocação encadeada, a complexidade da remoção é O(n).</span></span></p>\n<p><span style="background-color:white"><span style="color:#202124">III - Pilhas têm a propriedade de inverter a ordem de cadeias, enquanto as filas mantêm a ordem.</span></span></p>\n<p><span style="background-color:white"><span style="color:#202124"> A opção que contém todas as assertivas corretas é:</span></span></p>',
        alternatives: [
          {
            id: "65b1337955fefcc52fd57440",
            description: "<p>I.</p>",
          },
          {
            id: "65b1337955fefcc52fd57441",
            description: "<p>II.</p>",
          },
          {
            id: "65b1337955fefcc52fd57442",
            description: "<p>I e II.</p>",
          },
          {
            id: "65b1337955fefcc52fd57443",
            description: "<p>I e III.</p>",
          },
          {
            id: "65b1337955fefcc52fd57444",
            description: "<p>II e III.</p>",
          },
        ],
        isMarkedForReview: false,
        selectedAnswer: "",
      },
      {
        id: "654d3c26134266c159735f0e",
        description:
          "<p>(IBFC/2022 - Adaptada) Assinale, das alternativas abaixo, a única que identifica respectivamente uma Estrutura de Dados do tipo FIFO (<em>First In, First Out</em>) e uma outra com a Estrutura de dados do tipo LIFO (<em>Last In, First Out</em>):</p>",
        alternatives: [
          {
            id: "65b11f7b9ca9510b1781bb2a",
            description: "<p>Lista - vetor</p>",
          },
          {
            id: "65b11f7b9ca9510b1781bb2b",
            description: "<p>Pilha - fila</p>",
          },
          {
            id: "65b11f7b9ca9510b1781bb2c",
            description: "<p>Vetor - lista</p>",
          },
          {
            id: "65b11f7b9ca9510b1781bb2d",
            description: "<p>Fila - pilha</p>",
          },
          {
            id: "65b11f7b9ca9510b1781bb2e",
            description: "<p>Matriz - vetor</p>",
          },
        ],
        isMarkedForReview: false,
        selectedAnswer: "",
      },
    ],
  },
  timestamp: 1713536394187,
  status: "ok",
  statusCode: 200,
};
