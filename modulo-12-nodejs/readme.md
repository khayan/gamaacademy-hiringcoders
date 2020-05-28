# Módulo 12 - Node.js

## Objetivos do #cursoNodeBR

- Instalação -> App em produção
- Sincronia de funções Javascript
- Manipulação de listas
- Criando ferramentas de linha de comando
- Trabalhando com múltiplos bancos de dados
- Criando serviços profissionais com Hapi.js
- Documentação automática de serviços com Swagger
- Autenticação com JSON Web Token
- Publicação de serviços na Web

## Introdução ao Node.js

### O que **NÃO** é Node.js?

- Uma linguagem de programação
- Ferramenta para criação de sites simples
- Framework Javascript
- Ferramenta para criação de aplicações front-end

### O que **É** Node.js?

- Plataforma para construção de aplicações back-end usando Javascript
- Ferramenta inicialmente criada para resolver o problema de upload de imagens em 2009 (Ryan Dahl)
- Usada também para construção de ferramentas de linha de comando

## Conhecendo o gerenciador de pacotes NPM

- NPM > Node Package Manager
- Gerenciador de dependências Javascript
- Identifica dependências a partir de arquivos `package.json`
- Usado também para executar scripts bash a partir de seu projeto
- **[Site do NPM](https://www.npmjs.com/)**

## Começando um projeto em Node.JS

- Para iniciar um projeto `npm init` ou `npm init -y` para iniciar um projeto com as configurações padrão
- `package.json` é o arquivo de configurações do projeto
- `scripts` personalizados
    - Exemplo `"dev": "node index.js",`
    - No terminal, para rodar o script de exemplo, `npm run dev`
    - O comando vai buscar no `package.json`o script correspondente ao comando e irá executa-lo

## Sincronia de funções Javascript

### Máquina Virtual do JS

- Camada de aplicação Javascript
- V8 - Motor de execução
- Bindings - Convertem JS para C++

![Imagem: https://erickwendel.teachable.com/p/node-js-para-iniciantes-nodebr](img/sincronia.png)

### Event Loop - Fluxo de Eventos

- Delega eventos para o Sistema Operacional dentro do fluxo do Node
- Quando o SO termina de processar esses eventos ele devolve uma Callback para o Event Loop
- O Event Loop retorna para quem chamou aquele evento

#### Event Loop - Abstração

- while(true) - É um loop que não para de distribuir tarefas para o SO
- É uma fila de tarefas

![Imagem: https://erickwendel.teachable.com/p/node-js-para-iniciantes-nodebr](img/event-loop.png)

## Entendendo o ciclo de vida Javascript

- Funções que dependem de execução externa serão executadas em background
- A forma como que seu código é escrito é diferente da ordem em que ele é executado
- Importante sempre manter a ordem de sua execução para evitar problemas

## Trabalhando com Callbacks

Callback é uma função que é passada como parâmetro para outra função. Por sua vez, a Callback possui dois parâmetros, erro e sucesso. O exemplo feito em aula pode ser visto **[aqui]()**.

- **[Entendendo funções callback em JavaScript | Medium](https://medium.com/totvsdevelopers/entendendo-fun%C3%A7%C3%B5es-callback-em-javascript-7b500dc7fa22)**
- **[Função Callback | MDN](https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function)**
- **[O que é callback? | Stackoverflow](https://pt.stackoverflow.com/questions/27177/o-que-%C3%A9-callback)**

## Promisses

### Em breve...
