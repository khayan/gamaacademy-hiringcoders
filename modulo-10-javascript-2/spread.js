// Exemplo: Inserindo valores de um array listaIncluir dentro de outro array lista
let lista = [1, 2, 5];
let listaIncluir = [3, 4];

// for (let i = 0; i < listaIncluir.length; i++) {
//     for (let j = 0; j < lista.length; j++) {
//         if (lista[j] >= listaIncluir[i]) {
                /*
                    splice é uma função para inserir novos
                    valores no array em posições parametrizadas.
                    sintaxe:
                    array.splice(índice, número de elementos, elemento);
               */
//             lista.splice(j, 0, listaIncluir[i]);
//             j++; // Aqui o índice é incrementado "manualmente" porque inserimor um novo elemento no array
//         }
//     }
// }

// console.log(lista); // [1, 2, 3, 4, 5]

// Exemplo com Spread Operator ...
const listResult = [1, 2, ...listaIncluir, 5];
console.log(listResult);



// Exemplo: Cópia de um array através do Spread Operator
let arr = ['a', 'b', 'c'];
let arr2 = [...arr];

arr2.push('d');

console.log(`Arr = ${arr}`); // Arr = a,b,c
console.log(`Arr2 = ${arr2}`); // Arr2 = a,b,c,d