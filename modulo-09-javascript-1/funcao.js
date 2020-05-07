// Exemplo: Função soma()
/*
    A função soma() recebe 2 parâmetros, n1 e n2, e retorna a soma desses elementos. 
*/
function soma(n1, n2) {
    return n1 + n2;
}

var valor1 = 5;
var valor2 = 3;
var resultadoDaSoma = soma(valor1, valor2);

console.log(`${valor1} + ${valor2} = ${resultadoDaSoma}`); // 5 + 3 = 8

valor1 = resultadoDaSoma; // 8
valor2 = 42;
resultadoDaSoma = soma(valor1, valor2);

console.log(`${valor1} + ${valor2} = ${resultadoDaSoma}`); // 8 + 42 = 50

valor1 = resultadoDaSoma; // 50
valor2 = 7;
resultadoDaSoma = soma(valor1, valor2);

console.log(`${valor1} + ${valor2} = ${resultadoDaSoma}`); // 50 + 7 = 57



// Exemplo: Boas-Vindas, fulano!
/*
    Nesse exemplo criei uma função chamada bemVindo que recebe um parâmetro nome. O retorno dessa função é uma template string com a mensagem "Seja muito bem-vinda(o), ${nome}!!!", onde ${nome} sera substituido pelo valor atribuído ao parâmetro nome na chamada da função.
*/
function bemVindo(nome) {
    return `Seja muito bem-vinda(o), ${nome}!!!`;
}

console.log(bemVindo("Jorge"));