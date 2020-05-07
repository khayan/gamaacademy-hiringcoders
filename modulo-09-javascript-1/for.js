// FOR + IF/ELSE + .push()
var pares = [];
var impares = [];

for (let numero = 0; numero <= 100; numero++) {
    if (numero % 2 == 0) {
        // console.log(`${numero} é pares!`);
        pares.push(numero);
    } else {
        // console.log(`${numero} é impares!`);
        impares.push(numero);
    }
}
console.log(`Os números pares de 0 a 100 são: ${pares}`)
console.log(`Os números ímpares de 0 a 100 são: ${impares}`)


// Exemplo da Aula - Tabuada do 7
// var tabuada = 7

// for (let i = 0; i <= 10; i++) {
//     let resultado = tabuada*i
//     console.log(`${tabuada} x ${i} = ${resultado}`)
// }


// FOR Encadeado - Tabuadas do 0 ao 10 👍
for (let multiplicador = 0; multiplicador <= 10; multiplicador++) {
    console.log("----------------");
    console.log(`Tabuada do ${multiplicador}!!!`);
    console.log("----------------");
    for (let multiplicando = 0; multiplicando <= 10; multiplicando++) {
        let produto = multiplicador*multiplicando;
        console.log(`${multiplicador} x ${multiplicando} = ${produto}`);    
    }
}