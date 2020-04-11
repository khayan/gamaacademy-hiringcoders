# Módulo 5 - HTML

## Referências para estudos
- **W3Schools** -> https://www.w3schools.com/

___
## O que é HTML?
É uma **linguagem de marcação** que fornece **estrutura** para páginas web. Possui **tags** que dão semântica, significado, ao seu código.

___
## Tags
- `<html>` é a **tag principal** e que armazena todo o conteúdo de uma página através de duas outras grandes tags `<head>` e `<body>`.
- `<head>` tag que **armazena informações** como idioma do documento, título da página, algumas dependências externas e etc, sobre aquela página
- `<body>` tag que **armazena o conteúdo** de corpo da página, ou seja, o que é visível ao usuário final

### +++ Tags
- `<title>` tag que armazena o **título** de uma página. Deve ser inserida dentro da tag `<head>`. A informação contida nessa tag será visível aos usuários na aba do navegador.
- `<h1>, <h2>, ... <h6>` tags `"<h...>"` servem para criar **títulos visuais** na página. Devem ser inseridas dentro do `<body>`, sendo, `<h1>` o **título principal** (com maior destaque e relevância da página) e `<h6>` o **título com menor destaque**
- `<p>` tag que permite a criação de blocos de textos, **parágrafos**, na página
- `<hr/>` é uma **tag auto fechável** que insere uma **linha horizontal** na página
- `<br/>` tag **auto fechável** que força uma **quebra de linha** (break) na página
- `<img src=""/>` tag **auto fechável** que insere uma **imagem** a partir do **atributo** **`scr="caminho-relativo-da-imagem"`**
- `<a href="">` tag que insere um **link** a partir do atributo **`href="endereço_do_seu_link"`**

### Tags de Listas
Existem 2 tipos de listas
- `<ul>` tag que define listas não ordenadas
- `<ol>` tag que define listas ordenadas
- `<li>` tag que define cada item da lista

### Tags de Tabelas
- `<table>` tag que comporta elementos (outras tags) de uma tabela
- `<tr>` tag que cria a linha de uma tabela
- `<th>` tag que cria título de uma coluna
- `<td>` tag que cria os dados de uma tabela

### Tags de Seção
- `<div>` tag que cria uma **divisão** genérica para sua página