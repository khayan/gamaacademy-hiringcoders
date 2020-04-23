# Módulo 8 - Estrutura de Dados

**Pilhas, Filas e Listas tratam de conjuntos. Conjuntos têm critérios para classificar os elementos na ordem desejada.**

## Pilhas

Pilha é uma Estrutura de Dados básica. Algumas características:

- Pilha é um tipo de dado abstrato
- Empilha valores
- Operações: Entrada -> push
- Operações: Saída -> pop
- Controle: LIFO -> Last in, First Out

**LIFO** significa que o **último dado** inserido no vetor/lista/array será o **primeiro a sair**.

O exemplo mostrado em aula pode ser encontrado no arquivo **[pilha.js](https://github.com/khayan/gamaacademy-hiringcoders/tree/master/modulo-08-estrutura-de-dados/pilha.js)**

## Filas e Listas

Fila é uma Estrutura de Dados muito utilizada em sistemas que recebem informações de diferentes fontes e, ainda assim, precisa-se manter a ordem dos elementos. Por exemplo uma impressora conectada a uma rede com vários computadores precisa gerenciar o pool de impressão, ou seja, qual computador solicitou a impressão de um arquivo primeiro? E quem foi o último? E assim, nessa ordem acontece o controle **FIFO**, primeiro que entra é o primeiro que sai.

- Controle: FIFO -> First In, First Out

## Busca
A busca é um algoritmo projetado para encontrar um item com propriedades especificadas em uma coleção de itens. Os itens podem ser armazenadas individualmente, como registros em um banco de dados.

Existem vários tipos de buscas. A busca de elementos também sempre irá tratar de conjuntos, assim como as Pilhas, Filas e Listas. 

### Busca Sequencial ou Busca Linear
É "um **tipo de pesquisa** em vetores ou listas **de modo sequencial**, elemento por elemento, de modo que a função do tempo em relação ao número de elementos é linear, ou seja, cresce proporcionalmente. Num vetor ordenado, essa não é a pesquisa mais eficiente". (fonte: [Wikipédia](https://pt.wikipedia.org/wiki/Busca_linear))

O exemplo mostrado em aula pode ser encontrado no arquivo **[busca.js](https://github.com/khayan/gamaacademy-hiringcoders/tree/master/modulo-08-estrutura-de-dados/busca.js)**


### Busca Binária
"É um algoritmo de busca em vetores que **realiza sucessivas divisões do espaço de busca comparando** o elemento buscado (**chave**) com o **elemento no meio do vetor**. Se o elemento do meio do vetor for a chave, a busca termina com sucesso. Caso contrário, se o elemento do meio vier antes do elemento buscado, então a busca continua na metade posterior do vetor. E finalmente, se o elemento do meio vier depois da chave, a busca continua na metade anterior do vetor". (fonte: [Wikipédia](https://pt.wikipedia.org/wiki/Pesquisa_bin%C3%A1ria))

**Para que seja realizada com sucesso, os elementos do array devem estar ordenados.**

O exemplo mostrado em aula pode ser encontrado no arquivo **[busca.js](https://github.com/khayan/gamaacademy-hiringcoders/tree/master/modulo-08-estrutura-de-dados/busca.js)**


## Algoritmos de Ordenação
"É um **algoritmo que** coloca os elementos de uma dada sequência em uma certa ordem -- em outras palavras, **efetua** sua **ordenação completa ou parcial**". (fonte: [Wikipédia](https://pt.wikipedia.org/wiki/Algoritmo_de_ordena%C3%A7%C3%A3o))

#### Alguns Tipos de Algoritmos de Ordenação
- Bubble sort -> Exemplo disponível no arquivo **[bolha.js](https://github.com/khayan/gamaacademy-hiringcoders/tree/master/modulo-08-estrutura-de-dados/bolha.js)**
- Insertion sort
- Selection sort
- Quick Sort

## Função Hash
Hash é um **vetor de palavras-chave atribuído a valores**. Serve para **acessar um elemento em um único passo**.

"Hash é a transformação de uma grande quantidade de dados em uma pequena quantidade de informações". (fonte: [Wikipédia](https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_hash))

## Árvore
Dado um elemento central (**nó raiz**), *desde que a árvore esteja balanceada*, têm, a sua **esquerda**, todos os **elementos menores do que ele**, e, a sua **direita**, todos os **elementos maiores do que ele**.

"Árvore, no contexto da programação, engenharia de software e ciência da computação, **é uma das mais importantes estruturas de dados não lineares**. Herda as características das topologia em árvore. Conceitualmente diferente das listas, em que os dados se encontram numa sequência, nas árvores **os dados estão dispostos de forma hierárquica**, seus elementos se encontram "acima" ou "abaixo" de outros elementos da árvore.

São estruturas eficientes e simples em relação ao tratamento computacional, diferentemente dos grafos. Há inúmeros problemas no mundo real que podem ser modelados e resolvidos através das árvores. Estruturas de pastas de um sistema operacional, interfaces gráficas, bancos de dados e sites da internet são exemplos de aplicações de árvores.

Uma árvore é formada por um conjunto de elementos que armazenam informações chamados nodos (ou **nós**). Toda a árvore possui o elemento chamado **raiz**, que possui ligações para outros elementos denominados **ramos** ou **filhos**. Estes ramos podem estar ligados a outros elementos que também podem possuir outros ramos. O elemento que não possui ramos é conhecido como **nó folha**". (fonte: [Wikipédia](https://pt.wikipedia.org/wiki/%C3%81rvore_(estrutura_de_dados)))