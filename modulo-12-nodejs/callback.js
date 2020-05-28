/* Objetivo do exercício:
    0. Obter um usuário 
    1. Obter o número de telefone de um usuário a partir de seu ID
    2. Obter o endereço do usuário pelo ID
*/

///////////////////// Funções

function obterUsuario(callback) {
    setTimeout(function() {
        return callback(null, {
            id: 1,
            nome: 'Aladdin',
            dataNascimento: new Date()
        });
    }, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '934340202',
            ddd: 13
        });
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Dos Bobos',
            numero: 0
        });
    }, 2000);
}

//////////////////////// Chamada + Handle

obterUsuario(function resolverUsuario(erroUsuario, usuario) {
    if(erroUsuario) {
        console.log('DEU RUIM EM USUÁRIO', erroUsuario);
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(erroTelefone, telefone) {
        if(erroTelefone) {
            console.log('DEU RUIM NO TELEFONE', erroTelefone);
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(erroEndereco, endereco) {
            if(erroEndereco) {
                console.log('DEU RUIM NO ENDEREÇO', erroEndereco);
            }
            console.log(`
            Nome: ${usuario.nome},
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            `);
        });
    });
});