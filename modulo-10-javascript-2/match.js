const cpf = "Meu CPF é 291.221.820-98";
const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

console.log(cpf.match(regex)); // Retorna o Objeto inteiro
console.log(cpf.match(regex)[0]); // Retorna apenas o CPF