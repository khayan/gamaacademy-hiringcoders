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
- git show id_do_commit -> Inspeciona um commit específico

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

___
### git branch
    Para criar uma nova Branch utilizamos o seguinte comando:

        git branch nome_da_categoria/nome_da_branch
    
    Por exemplo: git branch feature/lista-clientes

    Utilizando apenas 'git branch' uma lista contendo todas as Branches do projeto é exibida.
___
    Para remover uma Branch usamos:
    
        'git branch -D nome_da_categoria/nome_da_branch'
___
### git checkout
    Para alternar de uma Branch para a outra, usamos o seguinte comando:

        git checkout nome_da_categoria/nome_da_branch
    
    Por exemplo: git checkout feature/lista-clientes
___
### git reset
    Para remover os arquivos da Stage ("tirar" o git add) usamos o comando:

        git reset
___
### git merge
    Para juntar Branches usamos:

        git merge nome_da_categoria/nome_da_branch
    
    Por exemplo:
        Criamos a Branch 'feature/lista-clientes', agora, queremos trazer todas as alterações realizadas nessa Branch para a Master. Seguimos os seguintes passos:

        1. git checkout master -> Para ir para a Branch Master
        2. git merge feature/teste-nova-branch

        Nesse momento todas as alterações realizadas na Branch 'feature/teste-nova-branch' como criação de novos arquivos, ou alterações nos arquivos existentes, estarão na Master e podemos comprovar isso se utilizarmos o comando 'git log' pois teremos o log contendo os commits realizados na Branch 'feature/teste-nova-branch' juntamente com os commits já realizados anteriormente na Master.
___
    Interessante:
    Ao executar o 'git merge' o GIT automaticamente faz o update dos arquivos e cria um commit sobre isso, deixando registrado na linha do tempo.