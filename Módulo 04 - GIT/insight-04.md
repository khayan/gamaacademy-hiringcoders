# Módulo 4 - GIT

    Sistema de controle de versão distribuído, ou seja, você consegue ter o seu código fonte em diversos computadores para compartilhar o desenvolvimento.
    
    Foi criado por Linus Torvald (criador do Linux) para melhorar a performance do time de desenvolvimento do Linux.
___
## Por que falamos de versionamento?
   
- Sistema descentralizado de versionamento de código
- É amplamente utilizado por desenvolvedores

### Principais Ferramentas do Mercado

- Github
- Bitbucket
- Gitlab

___
## Init, Add, Commit?

- git init -> Inicializa o versionamento do repositório GIT
- git add nome_do_arquivo -> Sinaliza ao GIT que ele deve monitorar os arquivos
- git commit -"mensagem" -> Cria um ponto na linha do tempo do repositório com uma mensagem sobre a alteração realizada

___
## Log, Status, Show?

- git log -> Visualiza informações de histórico sobre os commits na linha do tempo
- git status -> Informa o status do repositório, local atual (branch) e arquivos que sofreram alterações em relação ao último commit
- git show -> 

___
## Branch?

    É uma ramificação de uma linha temporal. A partir da Branch Master, que é a linha do tempo principal com todos os commits, conseguimos criar novas Branches em paralelo.

    A finalidade disso é proteger a Master e dar mais autonomia e liberdade para o desenvolvedor que está trabalhando em uma nova funcionalidade, melhoria ou versão. Ele cria a sua própria Branch de desenvolvimento e "clona" a Master nessa nova Branch.

    É uma boa prática categorizar as Branches pois existem diversos tipos de linhas do tempo, cada qual com suas características próprias. Por exemplo:
        
        - master
        - develop
        - feature
        - release
        - hotfix


    Para criar uma nova Branch utilizamos o seguinte comando:

        git branch nome_da_categoria/nome_da_branch
    
    Por exemplo: git branch feature/lista-clientes



    Para alternar de uma Branch para a outra, usamos o seguinte comando:

        git checkout nome_da_categoria/nome_da_branch
    
    Por exemplo: git checkout feature/lista-clientes



    Para remover os arquivos da Stage ("tirar" o git add) usamos o comando:

        git reset



    


