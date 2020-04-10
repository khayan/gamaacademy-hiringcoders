# Módulo 2 - Lógica de Programação

Esse é o fundamento para você entender como o computador funciona e como podemos criar nossos softwares para resolver os problemas (de acordo com o funcionamento da máquina).

- O computador apenas **executa** nossas instruções
- O computador **não possui** conhecimento prévio
___
## O que é um algoritmo?
Algoritmo é uma sequência finita de passos (instruções/comandos) ordenados, cujo objetivo é a resolução de um problema através da transformação da informação (dados).

### Exemplo clássico: Receita de Bolo
- **Transforma uma informação**: Ingredientes -> Bolo
- **Tem uma sequência finita de passos**: Cada um dos passos da receita
- **É ordenada**: Existe uma ordem sequencial dos passos
- **Resolve um problema**? Sim! Mata a fome.

### Padrões de Execução de um Algoritmo
- **Entrada** -> Toda informação que deve ser fornecida
- **Processamento** -> Sequência de passos para resolver o problema 
- **Saída** -> Resultado esperado

___
## Variáveis e Operações

**Variáveis**: Espaços reservados na memória
- São como caixas
- Tem um nome associado a ela (etiqueta da caixa)
- Mudam de conteúdo ao longo da execução do programa
___
### Operações

**Operações Aritméticas**

    + adição
    - subtração
    * multiplicação
    / divisão
    % módulo (resto da divisão)

**Operações Relacionais**

    > maior que
    >= maior ou igual a
    < menor que
    <= menor ou igual a
    == exatamente iguais (conteúdo e tipo)
    != diferente de

**Operações Lógicas**

    && AND (e)
    || OR (ou)
    ! NOT (negação)

### Exemplo
#### Algoritmo de cálculo de média simples

    INICIO
        DECLARE nota1, nota2, media

        LEIA(nota1)
        LEIA(nota2)
        
        media = (nota1+nota2)/2
        
        ESCREVA(media)
    FIM
___
## Decisões
Em muitos casos, é necessário que seu programa tome uma decisão antes de fazer uma determinada instrução (ou conjunto de instruções)

### Exemplo | Decisões simples
#### Algoritmo deve informar se o aluno foi aprovado ou reprovado
    INICIO
        DECLARE nota1, nota2, media
       
        LEIA(nota1)
        LEIA(nota2)

        media = (nota1+nota2)/2

        SE(media >= 6) ENTAO
            ESCREVA("PARABÉNS, VOCÊ ESTÁ APROVADO")
        SENAO
            ESCREVA("INFELIZMENTE NÃO ATINGIU A MÉDIA MÍNIMA DE 6")
        FIMSE
    FIM

**Indentação**: Recuos feitos nos blocos de código para melhor visualização e organização.

### Exemplo | Decisões aninhadas (múltiplas escolhas)
#### Algoritmo deve informar se o aluno foi aprovado ou reprovado por conceitos
    INICIO
        DECLARE nota1, nota2, media
       
        LEIA(nota1)
        LEIA(nota2)

        media = (nota1+nota2)/2

        SE(media < 9) ENTAO
            ESCREVA("CONCEITO A")
        SENAO
            SE(media > 7) ENTAO
                ESCREVA("CONCEITO B")
            SENAO
                SE(media > 5) ENTAO
                    ESCREVA("CONCEITO C")
                SENAO
                    ESCREVA("ALUNO REPROVADO")
                FIMSE
            FIMSE
        FIMSE
    FIM
___
## Repetições
Laços de repetição ou loop servem para executar um bloco de código várias vezes até que a condição dele não seja mais verdadeira.

### Exemplo | Tabuada
    INICIO
        DECLARE tabuada, numero, resultado

        LEIA(tabuada)
        numero = 0

        ENQUANTO(numero <= 10) FACA
            resultado = numero * tabuada
            ESCREVA(resultado)
            numero = numero + 1
        FIMENQUANTO
    FIM