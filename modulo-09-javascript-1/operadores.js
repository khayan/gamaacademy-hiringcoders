// Exemplo 1 - Concatenando strings
var nome = 'Khayan';
var sobrenome = 'Malantrucco';

var nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto); // Khayan Malantrucco

// Exemplo 2 - Subtração
var primeiroValor = 10;
var segundoValor = 'azul';
var terceiroValor = '3';

var resultado1 = primeiroValor - segundoValor;
var resultado2 = primeiroValor - terceiroValor;

console.log(resultado1); // NaN -> Not a Number - O Js não consegue realizar a conta
console.log(resultado2); // 7 -> Note que mesmo informando o número como uma string na variável terceiroValor, o Js consegue converte-lo e realizar a subtração