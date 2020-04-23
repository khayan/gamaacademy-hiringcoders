const valores = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120]

//////////////////////////// BUSCA BINÁRIA ////////////////////////////

function buscaSequencial(numero){
    for(i = 0; i < 6; i++){
        if(numero == valores[i]){
            return `O número ${numero} está na posição ${i} do array.`
        }
    }
    return `O número ${numero} não pertence ao vetor!`
}

// Exemplo de busca sequencial:

console.log(buscaSequencial(10)) // O número 10 está na posição 2 do array.
console.log(buscaSequencial(50)) // O número 50 não pertence ao vetor!
console.log(buscaSequencial(45)) // O número 45 está na posição 4 do array.
console.log(buscaSequencial(825)) // O número 825 não pertence ao vetor!



//////////////////////////// BUSCA BINÁRIA ////////////////////////////

function buscaBinaria(numero) {
    let inicio = 0 // Posição 0 do array 'valores'
    let meio
    let fim = 9 // Posição 9 do array 'valores'

    while (inicio <= fim) {
        meio = parseInt((inicio + fim) / 2) // Pegando a metade do array
        if (numero == valores[meio]) { // Verificando se o número escolhido é igual ao elemento do meio do array
            return `O número ${numero} está na posição ${meio} do array`
        } else {
            if (numero > valores[meio]) { // Se o número escolhido for maior...
                inicio = meio + 1 // O inicio passa a ser a próxima posição após o meio (para iniciar uma nova busca a partir da metade do array com valores maiores)
            } else { // Senão...
                fim = meio - 1 // O fim passa a ser a posição anterior ao meio (para iniciar uma nova busca a partir da metade do array com valores menores)
            }
        }
    }
    return `O número ${numero} não pertence ao array!`
}

// Exemplo de busca binária:

console.log(buscaBinaria(38)) // O número 38 está na posição 4 do array!
console.log(buscaBinaria(87)) // O número 87 não pertence ao array!
console.log(buscaBinaria(94)) // O número 94 não pertence ao array!
console.log(buscaBinaria(5)) // O número 5 está na posição 0 do array!
console.log(buscaBinaria(100)) // O número 100 está na posição 8 do array!
