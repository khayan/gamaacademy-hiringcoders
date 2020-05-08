// Exemplo Arrow Function
const bemVindo = (nome) => `Seja bem-vindo, ${nome}!!!`;
console.log(bemVindo("Khayan"));

// Exemplo: Função soma() convencional
// function soma(n1, n2) {
//     return n1 + n2;
// }
// console.log(soma(5, 2));

// Exemplo: Operações Básicas com Arrow Function
const soma = (x, y) => { return x + y };
console.log(soma(10, 3)); // 13

const subtracao = (x, y) => { return x - y };
console.log(subtracao(10, 3)); // 7

const multiplicacao = (x, y) => { return x * y };
console.log(multiplicacao(10, 3)); // 30

const divisao = (x, y) => { return x / y };
console.log(divisao(10, 3)); // 3.3333333333333335

const restoDivisao = (x, y) => { return x % y };
console.log(restoDivisao(10, 3)); // 1

/*
    Função anônima com retorno de um objeto deve ser encapsulada em parênteses!!!
*/
const objeto = () => (
    {
        nome: 'Khayan',
        sobrenome: 'Malantrucco',
        idade: 30,
        profissao: 'Desenvolvedor',
        isEstudante: true,
        linkedin: 'https://www.linkedin.com/in/khayanmalantrucco'
    });
console.log(objeto());

// Exemplo: Consumindo o JSON a partir da Arrow Function, usando Template String para exibir dados no console e fazendo verificação com uso do Operador Ternário
console.log(
    `${bemVindo(objeto().nome)} Por gentileza, confirme seus dados:
    Você se chama ${objeto().nome} ${objeto().sobrenome}?
    Você têm ${objeto().idade} anos?
    Você é ${objeto().profissao}?
    ${objeto().isEstudante ? 'Atualmente você está estudando' : 'Você não é estudante'}
    O seu linkedin está correto? ${objeto().linkedin}`
);