var valores = [5, 8, 10, 22, 45, 38]

function busca(numero){
    for(i = 0; i < 6; i++){
        if(numero == valores[i]){
            return `O número ${numero} está na posição ${i} do array.`
        }
    }
    return `O número ${numero} não pertence ao vetor!`
}

// Exemplo de busca:

console.log(busca(10)) // Exibe que o número está na posição 2
console.log(busca(50)) // Exibe a mensagem que o número não está no array valores
console.log(busca(45)) // Exibe que o número está na posição 4
console.log(busca(825)) // Exibe a mensagem que o número não está no array valores