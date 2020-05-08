# Módulo 10 - Javascript 2

## Template String

O Template String  é um recurso novo do JS desenvolvido pela ECMAScript para interpolar strings e variáveis de forma simplificada e elegante. O texto deve ser inserido entre crases e as variáveis devem estar entre `${ }` como no exemplo:

    let nome = "Khayan"
    console.log(`Seja bem-vindo, ${nome}!!!`); // Seja bem-vindo, Khayan!!!

Clique **[aqui](template-string.js)** para ver mais exemplos utilizando esse tipo de anotação.

Utilizei muito esse conceito anteriormente nos retornos das funções da Classe Matematica, criada no **[módulo 1 de JS](..\modulo-09-javascript-1)**, com a finalidade de exibir mensagens mais amigáveis no console, visando uma melhor experiência dos usuários. Acesse **[aqui](..\modulo-09-javascript-1\classe.js)** para ver esse conteúdo.


## Operador Ternário e Arrow Functions


### Operador Ternário

O operador condicional (ternário) é o único operador JavaScript que possui três operandos. Este operador é frequentemente usado como um atalho para a instrução if. (Fonte: [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operador_Condicional))

    condição ? expressão1 : expressão2

Clique **[aqui](ternario.js)** para ver um exemplo simples da utilização desse operador.


### Arrow Functions

É uma abstração de uma função com uma sintaxe mais curta em relação a função convencional. Um guia bem completo sobre Arrow Functions pode ser acessado no site da **[W3Schools](https://www.w3schools.com/js/js_arrow_function.asp)**.

    const bemVindo = (nome) => `Seja bem-vindo, ${nome}!!!`;

Clique **[aqui](arrow-function.js)** para ver alguns exemplos aplicados.

## Spread

## Desestruct e Match

## SPA, PWA e WebComponents