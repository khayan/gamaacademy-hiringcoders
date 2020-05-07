// While - Gerando um cartão de loteria aleatoriamente
// Organizando o array em ordem crescente

var numerosDaSorte = [];
var flag = 0;

while (flag < 6) {
    let numero = Math.floor(Math.random() * 60 + 1);

    if(numerosDaSorte.includes(numero)) {
        console.log(`${numero} já está marcado!`);
    } else {
        numerosDaSorte.push(numero);
        flag += 1;
    }
}

function ordena() {
    let temp;

    for(j = 0; j < numerosDaSorte.length; j++) {
        for(i = 0; i < numerosDaSorte.length; i++) { 
            if (numerosDaSorte[i] > numerosDaSorte[i + 1]) {
                temp = numerosDaSorte[i];
                numerosDaSorte[i] = numerosDaSorte[i + 1];
                numerosDaSorte[i + 1] = temp;
            }
        }
    }
    console.log(`Seus números da sorte são: ${numerosDaSorte}`);
}

ordena()
