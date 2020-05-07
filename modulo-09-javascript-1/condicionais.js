// ------- IF e ELSE - SE e SENÃO -------

var nome = 'Khayan'; // Primeira letra do nome maiúscula

// nome = nome.toUpperCase(); // Todas as letras maiúsculas
// nome = nome.toLowerCase(); // Todas as letras minúsculas

if (nome === 'Khayan') { // Condição: Primeira letra do nome maiúscula
    console.log(`Olá, ${nome}! Bem-vindo!`); // Saída: Olá, Khayan! Bem-vindo!
} else if (nome === 'khayan') { // Condição: Todas as letras minúsculas
    console.log(`Seja bem-vindo, ${nome}!`); // Saída: Seja bem-vindo, khayan!
} else { // Qualquer outra condição
    console.log("Seja bem-vindo, convidado!"); // Saída: Seja bem-vindo, convidado!
}


// ------- SWITCH e CASE - SELECIONE e CASO-------

var cor = 'verde'; // cor é verde

switch (cor) { // Selecione: cor
    case 'azul': // cor é azul?
        console.log("Cor selecionada: Azul #0000ff"); // Caso seja azul
        break;
    case 'vermelho': // cor é vermelho?
        console.log("Cor selecionada: Vermelho #ff0000"); // Caso seja vemelho
        break;
    case 'verde': // cor é verde?
        console.log("Cor selecionada: Verde #00ff00"); // Caso seja verde
        break;
    default: // Se cor não atender nenhum dos casos anteriores, entra no default (padrão)
        console.log("Cor não cadastrada..."); // Qualquer caso que não esteja listado anteriormente. Exemplo 'amarelo', 'branco', 'preto', 'batata', 'avião' e etc..
        break;
}