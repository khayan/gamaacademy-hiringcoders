var elementos = []
var topo = -1
const max = 10

function push(numero) {
    if (topo < max) {
        
        topo += 1

        elementos[topo] = numero

    } else {
        console.log("Pilha está cheia!")
    }
}

function estaVazia() {
    return topo == -1
}

function pop(){
    if(topo != -1){
        let numero = elementos[topo]
        topo -= 1
        return numero
    } else {
        console.log("Pilha está vazia!")
    }
}

// Exemplo: Inserindo 3 elementos e removendo

push(57)
push(32)
push(13)
push(1+5)

console.log(elementos) // [57, 32, 13, 6]

console.log(`${pop()} foi removido da pilha...`) // remove o topo da pilha = 6
console.log(`${pop()} foi removido da pilha...`) // remove o topo da pilha = 13
console.log(`${pop()} foi removido da pilha...`) // remove o topo da pilha = 32
console.log(`${pop()} foi removido da pilha...`) // remove o topo da pilha = 57


// Exemplo: Descobrindo o binário de um número decimal
/*
    30 / 2
    0   15 / 2
        1    7 / 2
             1   3 / 2
                 1   1 / 2
                     1   0

A pilha resulta em 0 1 1 1 1 então o binário de 30 é 1 1 1 1 0
*/

const numDecimal = 30 // Número escolhido
var resto // Irá armazenar o vetor com os RESTOS das divisões
var numInformado = numDecimal // Receberá o número escolhido para ser alterada dentro do WHILE

console.log(`Empilhando... ${numDecimal}`)
while (numInformado != 0) {
    resto = parseInt(numInformado % 2) // Calculando o resto
    push(resto) // Armazenando o resto
    console.log(resto) // Exibindo o resto
    numInformado = parseInt(numInformado / 2) // Realizando a divisão do número para continuar a operação até que o número seja ZERO
}

console.log(`Desempilhando... o binário de ${numDecimal} é...`)
while (!estaVazia()) { // Enquanto o TOPO não for -1, ou seja, enquanto a pilha não estiver vazia...
    console.log(pop()); // Desempilhe os números e exiba-os na tela
}