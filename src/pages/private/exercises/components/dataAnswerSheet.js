export const dataAnswerSheet = {
  data: {
    id: "6623f046257ea9c02620f9dc",
    endedAt: "2024-04-22T22:42:32.834Z",
    theme: {
      name: "LISTAS, PILHAS E FILAS",
      code: "00786",
    },
    blankQuestions: 4,
    rightQuestions: 2,
    wrongQuestions: 4,
    questions: [
      {
        id: "654d3c26134266c159735f14",
        description:
          "<p>(FCC/ 2013) Insira os dados de entrada numa fila. Em seguida, retire cada dado da fila e insira numa pilha. Mostre a pilha. Depois retire os dados da pilha e insira na fila. Mostre a fila.</p>\r\n<p> </p>\r\n<p>Dados de entrada: 11, 12, 23, 14, 25, 50, 8, 18, 29, 10</p>\r\n<p> </p>\r\n<p>As estruturas mostradas ficam</p>\r\n<p> </p>\r\n<p>I. Pilha: (topo) 10 - 29 - 18 - 8 - 50 - 25 - 14 - 23 - 12 - 11</p>\r\n<p> </p>\r\n<p>II. Fila: (começo) 11 - 12 - 23 - 14 - 25 - 50 - 8 - 18 - 29 - 10 (fim)</p>\r\n<p> </p>\r\n<p>III. Fila: (começo) 10 - 29 - 18 - 8 - 50 - 25 - 14 - 23 - 12 - 11 (fim)</p>\r\n<p> </p>\r\n<p>IV. Pilha: (topo) 11 - 12 - 23 - 14 - 25 - 50 - 8 - 18 - 29 - 10</p>\r\n<p> </p>\r\n<p>V. A fila mostrada fica com os elementos em ordem invertida dos dados de entrada</p>\r\n<p><br />\r\nEstá correto o que se afirma APENAS em:</p>\r",
        isMarkedForReview: true,
        commentedAnswer:
          '<p>Ao inserir na fila temos: 10,29,18,8,50,25,14,23,12,11</p>\r\n<p> </p>\r\n<p>Ao inserir na pilha temos:</p>\r\n<table cellspacing="0" class="MsoTableGrid" style="border-collapse:collapse; border:undefined">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style="width:27.8pt">\r\n\t\t\t<p><span >10</span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="width:27.8pt">\r\n\t\t\t<p><span >29</span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="width:27.8pt">\r\n\t\t\t<p><span >18</span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="width:27.8pt">\r\n\t\t\t<p><span >8</span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="width:27.8pt">\r\n\t\t\t<p><span >50</span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="width:27.8pt">\r\n\t\t\t<p><span >25</span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="width:27.8pt">\r\n\t\t\t<p><span >14</span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="width:27.8pt">\r\n\t\t\t<p><span >23</span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="width:27.8pt">\r\n\t\t\t<p><span >12</span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="width:27.8pt">\r\n\t\t\t<p><span >11</span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n<p> </p>\r\n<p>Retirando os dados da pilha e inserindo na fila: 10,29,18,8,50,25,14,23,12,11</p>\r',
        responseStatus: 2,
        alternatives: [
          {
            id: "65ea4cd070af74373849d35d",
            description:
              '<p><span ><span style="color:black">III e IV.</span></span></p>\r',
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65ea4cd070af74373849d35e",
            description: "<p>II e IV.</p>\r",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65ea4cd070af74373849d35f",
            description: "<p>I, II e III.</p>\r",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65ea4cd070af74373849d360",
            description: "<p>I, III e V.</p>\r",
            isCorrectAnswer: true,
            wasSelectedAnswer: false,
          },
          {
            id: "65ea4cd070af74373849d361",
            description: "<p>I, IV e V.</p>\r",
            isCorrectAnswer: false,
            wasSelectedAnswer: true,
          },
        ],
      },
      {
        id: "654d3a1f134266c1597164c0",
        description:
          '<p><span style="background-color:white"><span style="color:#202124">O acesso ao elemento de uma estrutura de dados tipo pilha se restringe ao mais recente na pilha. Já o acesso a um elemento de uma estrutura tipo fila ocorre ao dado há mais tempo na fila. Sobre pilhas e filas, avalie as assertivas a seguir:</span></span></p>\n<p><span style="background-color:white"><span style="color:#202124">I - Uma forma de evitar o desperdício de memória numa fila em alocação sequencial é utilizar-se lista circular.</span></span></p>\n<p><span style="background-color:white"><span style="color:#202124">II - Em uma pilha em alocação encadeada, a complexidade da remoção é O(n).</span></span></p>\n<p><span style="background-color:white"><span style="color:#202124">III - Pilhas têm a propriedade de inverter a ordem de cadeias, enquanto as filas mantêm a ordem.</span></span></p>\n<p><span style="background-color:white"><span style="color:#202124"> A opção que contém todas as assertivas corretas é:</span></span></p>',
        isMarkedForReview: false,
        commentedAnswer:
          "<p>As assertivas I e III estão corretas. A assertiva I está correta porque uma lista circular é uma forma eficiente de evitar o desperdício de memória em uma fila com alocação sequencial. A assertiva III também está correta, pois uma das características das pilhas é a capacidade de inverter a ordem das cadeias, enquanto as filas mantêm a ordem original. No entanto, a assertiva II está incorreta. Em uma pilha com alocação encadeada, a complexidade da remoção é O(1), não O(n), pois a remoção ocorre no topo da pilha, sem a necessidade de percorrer toda a estrutura.</p>",
        responseStatus: 1,
        alternatives: [
          {
            id: "65b1337955fefcc52fd57440",
            description: "<p>I.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b1337955fefcc52fd57441",
            description: "<p>II.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b1337955fefcc52fd57442",
            description: "<p>I e II.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b1337955fefcc52fd57443",
            description: "<p>I e III.</p>",
            isCorrectAnswer: true,
            wasSelectedAnswer: true,
          },
          {
            id: "65b1337955fefcc52fd57444",
            description: "<p>II e III.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
        ],
      },
      {
        id: "654d3a12134266c15971578c",
        description:
          "<p><span >Sejam as seguintes propriedades de estruturas de dados:</span></p>\n<p><span >I- a remoção de um elemento interno obriga ao deslocamento de todos os sucessores.</span></p>\n<p><span >II- Um nó pode ser inserido no meio da estrutura com complexidade O (1).</span></p>\n<p><span >III- a inserção e a remoção podem ser feitas em ambas as extremidades.</span></p>\n<p><span >As descrições acima se referem respectivamente à:</span></p>",
        isMarkedForReview: false,
        commentedAnswer:
          "<p><span >As propriedades descritas no enunciado se referem, respectivamente, a três diferentes estruturas de dados. A primeira propriedade, que menciona a remoção de um elemento interno e o consequente deslocamento de todos os sucessores, é característica de uma Lista em alocação sequencial. A segunda propriedade, que permite a inserção de um nó no meio da estrutura com complexidade O(1), é típica de uma Lista em alocação encadeada. Por fim, a terceira propriedade, que permite a inserção e a remoção em ambas as extremidades, é uma característica de uma estrutura de dados chamada deque. Portanto, a alternativa correta é a D: Lista em alocação sequencial, Lista em alocação encadeada e deque.</span></p>",
        responseStatus: 2,
        alternatives: [
          {
            id: "65b1167cc3b1544ce7c8c11c",
            description:
              "<p><span >Lista em alocação encadeada, Lista circular e Lista em alocação sequencial.</span></p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b1167cc3b1544ce7c8c11d",
            description:
              "<p><span >Lista em alocação encadeada, Lista em alocação sequencial e deque.</span></p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b1167cc3b1544ce7c8c11e",
            description:
              "<p><span >Lista em alocação sequencial, Lista circular e Lista em alocação encadeada.</span></p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: true,
          },
          {
            id: "65b1167cc3b1544ce7c8c11f",
            description:
              "<p><span >Lista em alocação sequencial, Lista em alocação encadeada e deque.</span></p>",
            isCorrectAnswer: true,
            wasSelectedAnswer: false,
          },
          {
            id: "65b1167cc3b1544ce7c8c120",
            description:
              "<p><span >Lista em alocação sequencial, Lista em alocação sequencial e deque.</span></p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
        ],
      },
      {
        id: "654d3a1f134266c159716496",
        description:
          '<p>Uma pilha segue a regra: "o último a chegar é o primeiro a sair". Já as filas obedecem à regra: o primeiro a chegar é o primeiro a sair. Com base nesses argumentos,</p>\n<p>Uma pilha P e uma fila F originalmente com n elementos cada (n > 5), onde suas operações são:</p>\n<p>empilha(P, elemento): insere elemento na pilha P;</p>\n<p>desempilha(P): remove da pilha P e retorna o elemento removido;</p>\n<p>enfileira(F, elemento): insere elemento na fila F;</p>\n<p>desenfileira(F): remove da fila F e retorna o elemento removido;</p>\n<p>para i = 1 até n, faça</p>\n<p>empilha(P, desempilha(P))</p>\n<p>enfileira(F, desenfileira(F))</p>\n<p>fim-para</p>\n<p>Ao final da execução do pseudocódigo, os estados finais de P e F serão respectivamente:</p>',
        isMarkedForReview: false,
        commentedAnswer:
          '<p>De acordo com o pseudocódigo apresentado, as operações de empilhar e desempilhar na pilha P, assim como as operações de enfileirar e desenfileirar na fila F, estão sendo realizadas na mesma quantidade de vezes. Isso significa que, para cada elemento retirado, um elemento é inserido novamente. Portanto, a ordem dos elementos em ambas as estruturas, P e F, permanecerá a mesma, ou seja, em ordem original. Assim, a alternativa correta é a A: "Elementos em ordem original e elementos em ordem original".</p>',
        responseStatus: 0,
        alternatives: [
          {
            id: "65b1144fc3b1544ce7c86114",
            description:
              "<p>Elementos em ordem original e elementos em ordem original.</p>",
            isCorrectAnswer: true,
            wasSelectedAnswer: false,
          },
          {
            id: "65b1144fc3b1544ce7c86115",
            description:
              "<p>Elementos em ordem inversa e elementos em ordem inversa.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b1144fc3b1544ce7c86116",
            description:
              "<p>Elementos em ordem original e elementos em ordem inversa.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b1144fc3b1544ce7c86117",
            description:
              "<p>Elementos em ordem inversa e elementos em ordem original.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b1144fc3b1544ce7c86118",
            description: "<p>Ambas as estruturas estarão vazias.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
        ],
      },
      {
        id: "654d3c26134266c159735f08",
        description:
          "<p>(IBADE/2022) Uma estrutura de dados onde existe uma coleção ordenada de entidades sendo a metodologia de busca com base no deslocamento relativo ao primeiro (cabeça) da coleção, chama-se:</p>",
        isMarkedForReview: false,
        commentedAnswer:
          "<p>A alternativa correta é a lista. O conceito de nó cabeça é comumente utilizado em estruturas de dados, especialmente em listas encadeadas. Este nó, que é fictício e não armazena dados reais, serve como uma referência para o início da lista. Ele facilita o acesso aos elementos da lista e a manipulação da mesma, como a inserção e remoção de elementos. Portanto, em uma estrutura de dados onde a busca é realizada com base no deslocamento relativo ao primeiro elemento (cabeça) da coleção, estamos falando de uma lista.</p>",
        responseStatus: 1,
        alternatives: [
          {
            id: "65b120299ca9510b1781d0b6",
            description: "<p>Árvore.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b120299ca9510b1781d0b7",
            description: "<p>Lista.</p>",
            isCorrectAnswer: true,
            wasSelectedAnswer: true,
          },
          {
            id: "65b120299ca9510b1781d0b8",
            description: "<p>Pilha.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b120299ca9510b1781d0b9",
            description: "<p>Fila.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b120299ca9510b1781d0ba",
            description: "<p>Árvore binária.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
        ],
      },
      {
        id: "654d3a1f134266c1597164a2",
        description:
          "<p>Uma lista ordenada alocada sequencialmente possui como desvantagem:</p>",
        isMarkedForReview: false,
        commentedAnswer:
          '<p>A alternativa correta é a letra C, que afirma que uma desvantagem de uma lista ordenada alocada sequencialmente é o "Tamanho limitado de memória alocada para lista". Isso ocorre porque, em uma alocação sequencial, a lista é armazenada em blocos de memória contíguos. Portanto, o tamanho da lista é limitado pelo maior bloco contíguo de memória disponível. Isso pode levar a problemas se a lista precisar crescer além desse limite, pois não há espaço disponível para acomodar o crescimento.</p>',
        responseStatus: 2,
        alternatives: [
          {
            id: "65b127729ca9510b1782c978",
            description: "<p>Complexidade O(n) para a busca.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b127729ca9510b1782c979",
            description: "<p>Impossibilidade de remoção no meio da lista.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b127729ca9510b1782c97a",
            description:
              "<p>Tamanho limitado de memória alocada para lista.</p>",
            isCorrectAnswer: true,
            wasSelectedAnswer: false,
          },
          {
            id: "65b127729ca9510b1782c97b",
            description: "<p>Impossibilidade de acesso direto.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: true,
          },
          {
            id: "65b127729ca9510b1782c97c",
            description: "<p>A reserva de memória em posições contíguas.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
        ],
      },
      {
        id: "654d3a12134266c159715792",
        description:
          "<p><span >Sobre listas duplamente encadeadas, afirma-se: </span></p>\n<p><span >I) Cada nó usa o dobro do número de campos ponteiro de uma lista simplesmente encadeada. </span></p>\n<p><span >II) A complexidade de remoção é metade da complexidade de remoção em lista simplesmente encadeada. </span></p>\n<p><span >III) Não permitem a inserção de nó no meio da lista. </span></p>\n<p><span >É correto apenas: </span></p>",
        isMarkedForReview: false,
        commentedAnswer:
          "<p><span >A afirmação I é a única correta. Em uma lista duplamente encadeada, cada nó possui dois campos ponteiros, um apontando para o nó anterior e outro para o próximo nó, o que é o dobro do número de campos ponteiros de uma lista simplesmente encadeada, que possui apenas um campo ponteiro apontando para o próximo nó. A afirmação II está incorreta, pois a complexidade de remoção em uma lista duplamente encadeada não é necessariamente metade da complexidade de remoção em uma lista simplesmente encadeada. A afirmação III também está incorreta, pois as listas duplamente encadeadas permitem a inserção de nós no meio da lista.</span></p>",
        responseStatus: 0,
        alternatives: [
          {
            id: "65b137e955fefcc52fd61a89",
            description: "<p><span >I. </span></p>",
            isCorrectAnswer: true,
            wasSelectedAnswer: false,
          },
          {
            id: "65b137e955fefcc52fd61a8a",
            description: "<p><span >II. </span></p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b137e955fefcc52fd61a8b",
            description: "<p><span >III. </span></p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b137e955fefcc52fd61a8c",
            description: "<p><span >I e III. </span></p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b137e955fefcc52fd61a8d",
            description: "<p><span >II e III. </span></p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
        ],
      },
      {
        id: "654d3c26134266c159735f0e",
        description:
          "<p>(IBFC/2022 - Adaptada) Assinale, das alternativas abaixo, a única que identifica respectivamente uma Estrutura de Dados do tipo FIFO (<em>First In, First Out</em>) e uma outra com a Estrutura de dados do tipo LIFO (<em>Last In, First Out</em>):</p>",
        isMarkedForReview: true,
        commentedAnswer:
          '<p>As estruturas de dados FIFO (First In, First Out) e LIFO (Last In, First Out) possuem características distintas em relação ao acesso aos elementos. A estrutura FIFO, como o próprio nome sugere, é aquela em que o primeiro elemento a entrar é o primeiro a sair. Um exemplo clássico dessa estrutura é a fila, onde o primeiro elemento a ser adicionado é o primeiro a ser removido, assim como em uma fila de pessoas, onde a primeira pessoa a chegar é a primeira a ser atendida.</p>\n\n<p>Por outro lado, a estrutura LIFO é aquela em que o último elemento a entrar é o primeiro a sair. Um exemplo dessa estrutura é a pilha, onde o último elemento a ser adicionado é o primeiro a ser removido, similar a uma pilha de pratos, onde o último prato colocado é o primeiro a ser retirado.</p>\n\n<p>Portanto, a alternativa que corretamente identifica uma estrutura de dados do tipo FIFO e uma do tipo LIFO é a alternativa D, que apresenta "fila - pilha".</p>',
        responseStatus: 2,
        alternatives: [
          {
            id: "65b11f7b9ca9510b1781bb2a",
            description: "<p>Lista - vetor</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: true,
          },
          {
            id: "65b11f7b9ca9510b1781bb2b",
            description: "<p>Pilha - fila</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b11f7b9ca9510b1781bb2c",
            description: "<p>Vetor - lista</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b11f7b9ca9510b1781bb2d",
            description: "<p>Fila - pilha</p>",
            isCorrectAnswer: true,
            wasSelectedAnswer: false,
          },
          {
            id: "65b11f7b9ca9510b1781bb2e",
            description: "<p>Matriz - vetor</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
        ],
      },
      {
        id: "654d3a1f134266c159716466",
        description:
          "<p>Várias estruturas de dados podem ser utilizadas para armazenar dados de uma aplicação. Em relação ao assunto, assinale a alternativa correta.</p>",
        isMarkedForReview: false,
        commentedAnswer:
          "<p>A alternativa correta é a E. A estrutura de dados do tipo fila segue o princípio de que o primeiro elemento a ser inserido será o primeiro a ser retirado. Isso é conhecido como comportamento FIFO (First In, First Out), ou seja, o primeiro a entrar é o primeiro a sair. As outras alternativas apresentam conceitos errados ou confusos sobre as estruturas de dados mencionadas.</p>",
        responseStatus: 0,
        alternatives: [
          {
            id: "65b12daf55fefcc52fd4a283",
            description:
              "<p>A estrutura de dados do tipo pilha sempre retira os elementos que foram inseridos primeiro na estrutura.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b12daf55fefcc52fd4a284",
            description:
              "<p>A estrutura de dados do tipo lista utiliza a ideia do primeiro a chegar, primeiro a ser servido para inserir elementos.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b12daf55fefcc52fd4a285",
            description:
              "<p>A estrutura de dados do tipo fila sempre retira os elementos que entraram por último na fila.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b12daf55fefcc52fd4a286",
            description:
              "<p>A estrutura de dados do tipo pilha, para retirar o elemento do topo da pilha, é necessário retirar o elemento da base da pilha.</p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b12daf55fefcc52fd4a287",
            description:
              "<p>A estrutura de dados do tipo fila utiliza a ideia do primeiro a ser inserido, será o primeiro a ser retirado.</p>",
            isCorrectAnswer: true,
            wasSelectedAnswer: false,
          },
        ],
      },
      {
        id: "654d3a12134266c159715786",
        description:
          '<p>L<span>evando em consideração a estrutura de dados do tipo "Pilha", analise os itens a seguir e, ao final, assinale a alternativa correta:</span></p>\n<p><span>I- Um elemento a ser removido é o que está há menos tempo na estrutura de dados.</span></p>\n<p><span>II- Um elemento a ser removido é o que está há mais tempo na estrutura de dados.</span></p>\n<p><span>III- Um elemento a ser inserido é colocado na base da pilha.</span></p>',
        isMarkedForReview: false,
        commentedAnswer:
          '<p><span>A alternativa correta é a letra A, que afirma que apenas o item I é verdadeiro. Isso ocorre porque na estrutura de dados do tipo "Pilha", o último elemento que entra é o primeiro que sai (LIFO - Last In, First Out). Portanto, o elemento a ser removido é sempre o que está há menos tempo na estrutura de dados, conforme afirmado no item I. Os itens II e III estão incorretos, pois na "Pilha", o elemento a ser removido não é o que está há mais tempo na estrutura e um novo elemento não é inserido na base da pilha, mas no topo.</span></p>',
        responseStatus: 0,
        alternatives: [
          {
            id: "65b121979ca9510b178201a2",
            description: "<p><span>Apenas o item I é verdadeiro.</span></p>",
            isCorrectAnswer: true,
            wasSelectedAnswer: false,
          },
          {
            id: "65b121979ca9510b178201a3",
            description: "<p><span>Apenas o item II é verdadeiro.</span></p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b121979ca9510b178201a4",
            description: "<p><span>Apenas o item III é verdadeiro.</span></p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b121979ca9510b178201a5",
            description:
              "<p><span>Apenas os itens II e III são verdadeiros.</span></p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
          {
            id: "65b121979ca9510b178201a6",
            description:
              "<p><span>Apenas os itens I e II são verdadeiros</span></p>",
            isCorrectAnswer: false,
            wasSelectedAnswer: false,
          },
        ],
      },
    ],
  },
  timestamp: 1713825753955,
  status: "ok",
  statusCode: 200,
};
