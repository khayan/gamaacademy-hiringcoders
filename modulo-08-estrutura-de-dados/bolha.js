var valores = [12, 9, 4, 52, 25, 27, 5, 2, 3, 1, 15, 13, 81, 80]

//////////////////////////// BUBBLE SORT ////////////////////////////


function ordena() {
    let inicio = 0 // Primeira posição do array
    let fim = 13 // Última posição do array
    let temp // Variável para armazenamento temporário da informação

    for(vezes = 0; vezes < valores.length; vezes++) { // Quantas VEZES teremos que rodar essa lógica para organizar o array? O número em que VEZES seja menor do que o tamanho do nosso array, nesse caso 13. A função '.length' do Javascript já faz esse cálculo do tamanho do elemento para nós
        for(i = inicio; i < fim - vezes; i++) { // O index inicia na PRIMEIRA posição do array, então i = 0; enquanto o index for menor do que o valor final - 1 eu mantenho a repetição; a cada rodada eu aumento em 1 o valor do index para percorrer cada uma das posições do array
            if (valores[i] > valores[i + 1]) { // Condição: verificar se um elemento posicionado no index atual dentro do vetor valores é maior que o sucessor dele. Se isso for verdade...
                temp = valores[i] // Armazenamos em temp esse elemento
                valores[i] = valores[i + 1] // Esse elemento recebe o valor do seu sucessor
                valores[i + 1] = temp // E o sucessor recebe o valor do elemento que estava o antecedendo, e que está armazenado em temp (invertendo a ordem inicial)
            }
        }
    }
}

// Exemplo de Bubble Sort

console.log(`Array VALORES: [${valores}]`)
ordena() // Bubble Sort
console.log(`Array VALORES organizado: [${valores}]`)