// Importando o PROMISIFY para converter o callback
/*
    Nem sempre é possível utilizar o Promisify
    Algumas libs não seguem o padrão de erros e respostas do callback
*/
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

// PROMISE
function obterUsuario() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function() {
            // return reject(new Error ('Deu ruim MESMO!!!')); -> Simulando um erro no console
            return resolve({
                id: 1,
                nome: 'Aladdin',
                dataNascimento: new Date()
            });
        }, 1000);
    });
}

// PROMISE
function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '934340202',
                ddd: 13
            });
        }, 2000);
    });
}

// CALLBACK
function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, { // Se não seguir a convenção o promisify retorna erro!
            rua: 'Dos Bobos',
            numero: 0
        });
    }, 2000);
}

const usuarioPromise = obterUsuario();
/*
    Para manipular o sucesso usamos a função .then
    Para manipular os erros usamos a função .catch

    Conceito de Pipe (passando os resultados das funções para a próxima)
    função usuário -> função telefone -> telefone
*/
usuarioPromise
    .then(function (usuario) {
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(result) {
            return {
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id
                },
                telefone: result
            };
        });
    })
    .then(function(resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id); //convertendo com promisify
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            };
        });
    })
    .then(function (resultado) {
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}`);
    })
    .catch(function (error) {
        console.log('DEU RUIM', error); // Erro simulado é capturado e tratado aqui
    });