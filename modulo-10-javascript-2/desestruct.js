// Declaração de um objeto pessoa
const pessoa = {
    nome: 'Khayan',
    sobrenome: 'Malantrucco',
    idade: 30,
    profissao: 'Desenvolvedor Web',
    isEstudante: false,
    linkedin: 'https://www.linkedin.com/in/khayanmalantrucco'
};

// Como acessar cada uma das propriedades do objeto?

        // EXTREMAMENTE VERBOSO E TRABALHOSO!!!

// let nomeDaPessoa = pessoa.nome;
// let sobrenomeDaPessoa = pessoa.sobrenome;
// let idadeDaPessoa = pessoa.idade;
// let profissaoDaPessoa = pessoa.profissao;
// let pessoaEstudante = pessoa.isEstudante;
// let linkedinDaPessoa = pessoa.linkedin;

// console.log(nomeDaPessoa);
// console.log(sobrenomeDaPessoa);
// console.log(idadeDaPessoa);
// console.log(profissaoDaPessoa);
// console.log(pessoaEstudante);
// console.log(linkedinDaPessoa);

/*
    Utilizando o Destructuring Assignment:

    Para esse tipo de anotação a variável deve ter o mesmo
    nome da propriedade (da chave, na verdade) do objeto.

    Exemplo:
*/
let { nome, sobrenome, idade, profissao, isEstudante, linkedin } = pessoa;

console.log(nome, sobrenome, `${idade} anos`, profissao);

console.log(linkedin);

isEstudante ?
console.log(`Seja bem-vindo, ${nome}!`) :
console.log(`Antes de acessar o ambiente virtual você deve estar matriculado em algum curso, ${nome}!`)