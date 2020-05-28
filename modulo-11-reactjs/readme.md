# Módulo 11 - React

## Por que React?

- Muito popular
- Oportunidades em alta
- Versátil
- Comunidade muito ativa
- Tudo fica dentro do JavaScript
- **[Documentação oficial do React](https://pt-br.reactjs.org/docs/getting-started.html)**

#### Curiosidade [out of topic]

O código do React é open source. Qualquer pessoa pode contribuir. Veja como contribuir clicando **[aqui](https://pt-br.reactjs.org/docs/how-to-contribute.html)**

Em 2019 eu realizei um `pull request` para a **documentação oficial do React**. A correção foi muito simples, porém, fundamental para qualquer um que estivesse começando com a tecnologia. Clique **[aqui](https://github.com/reactjs/pt-BR.reactjs.org/commit/e8a05c22754f1a47e0493650cd0e1a94b3e0d97a)** para ver o commit.

### O que é?

- É uma Biblioteca (*lib*) para a criação de interfaces (UI)
- Utilizado para a construção de SPA (Single Page Applications)
- Baseado em Componentes
- Criado pelo Facebook em 2011

#### Ecossistema

- ReactJS
- React Native
- Redux
- Webpack
- JSX
- Styled Components
 
#### Empresas que utilizam React

- Facebook
- Instagram
- WhatsApp
- Netflix
- Dropbox
- E muitas outras!

### Vantagens

#### Organização

- Dividir nosso código em blocos específicos
- O funcionamento de um componente não interfere em outro
- Se um componente é removido, o resto continua funcionando

#### Divisão de responsabilidades

- Back-end: Regras de negócio
- Front-end: Interface
- [Programação declarativa](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_declarativa)

## Preparando o Ambiente

- Download e instalação **[Node.js](https://nodejs.org/pt-br/download/)**
    - Para verificar a versão instalada rode o comando `node -v`
- Instalação **[npm](https://www.npmjs.com/get-npm)** (*default*) ou **[Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)** `npm install -g yarn`
    - Para verificar a versão instalada rode o comando `npm -v` ou `yarn -v`

### Iniciando o projeto

- `npx create-react-app nome-do-projeto` para iniciar o projeto
- `cd nome-do-projeto` para acessar a pasta do projeto
- `npm start` ou `yarn start` para rodar o projeto

## Fundamentos do React

### [ReactDOM](https://pt-br.reactjs.org/docs/react-dom.html)

Responsável juntamente com o método `render` por inserir os elementos na página

### [JSX](https://pt-br.reactjs.org/docs/introducing-jsx.html)

É uma estrutura parecida com o HTML, e que é retornada por uma função JavaScript

### [Componentes & Props](https://pt-br.reactjs.org/docs/components-and-props.html)

**Components** são "pedaços" isolados que formam a página e podem ser reaproveitados.

- Tudo dentro do **React** são **components**
- Todo componente possui um **estado** interno e **propriedades**
- **Props** são como atributos no HTML e servem para alterar um componente de acordo com a necessidade
- **State** servem para armazenar uma situação específica, uma condição de um estado. Por exemplo, manter o usuário logado, manter a pontuação do usuário em um jogo e etc
- **Fragments** `<>` são "tags anônimas" que servem para encapsular elementos (que formam um componente) de forma genérica e retorná-los na DOM

## [Axios](https://www.npmjs.com/package/axios)

- Cliente HTTP baseado em Promisses
- Consumo de API

## [react-router-dom]((https://reacttraining.com/react-router/web/guides/quick-start))

Estrutura básica de rotas

        <BrowserRouter>
            <Switch>
                <Route path='/rota-do-seu-componente' component={SeuComponente} />
            </Switch>
        </BrowserRouter>
        
- É um pluggin
- ./src/routes.js
- `import { Switch, Route, BrowserRouter } from 'react-router-dom';`

## [Styled Components](https://styled-components.com/)

É uma *lib* que nos permite escrever códigos **CSS** dentro do **JavaScript**.

### Vantagens

- Sem importações de arquivos .css
- Reutilização do componente completo
- Compatibilidade de browsers
- Cada componente só enxerga o seu próprio CSS, evita conflitos

## Hooks Básicos

### [useEffect](https://pt-br.reactjs.org/docs/hooks-reference.html#useeffect) - Monitora ciclo de vida
### [useState](https://pt-br.reactjs.org/docs/hooks-reference.html#usestate) - Monitora estado
### [useHistory](https://reacttraining.com/react-router/web/api/Hooks/usehistory) - Gerencia rotas

## Programação Declarativa

Programação declarativa é um paradigma de programação baseado em programação funcional, programação lógica e programação restritiva. O React funciona dessa forma.

É como se todas as funcionalidades estivessem encapsuladas e implícitas em uma única declaração. Por exemplo:

        <S.List>
            { repositories.map(repository => {
                return (
                    <S.ListItem>{repository}</S.ListItem>
                );
            })}
        </S.List>

Está sendo realizado o `map` no array `repositories`, e, para cada elemento encontrado nesse array o programa irá retornar esse valor dentro de um componente `<ListItem>` formando uma lista de repositórios `<List>`. Caso o array estiver vazio, o programa simplesmente não irá exibir nada.

Ou seja, o React faz toda a gestão e assume todo o processo.

## Conditional Rendering

>Renderização condicional em React funciona da mesma forma que condições funcionam em JavaScript. Use operadores de JavaScript como if ou operador condicional para criar elementos representando o estado atual, e deixe o React atualizar a UI para corresponde-los.

Para saber mais sobre essa funcionalidade do React, acesse a documentação oficial clicando **[aqui](https://pt-br.reactjs.org/docs/conditional-rendering.html)**.

## Próximos Passos com React

- **[React Context API](https://pt-br.reactjs.org/docs/context.html)**
- **[Redux](https://redux.js.org/)**
- **[Next.js](https://nextjs.org/)**
- **[Gatsby.js](https://www.gatsbyjs.org/)**