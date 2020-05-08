let valorIngresso = 200;
let isEstudante = true;

// Exemplo sem ternário
// if (isEstudante) {
//     valorIngresso /= 2; // 50% de desconto, meia entrada
// } else {
//     valorIngresso;
// }


// Exemplo com ternário
isEstudante ? valorIngresso /= 2 : valorIngresso;


console.log(`Seu ingresso custa R$${valorIngresso}`);