// Importando o PROMISIFY para converter o callback
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

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

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Dos Bobos',
            numero: 0
        });
    }, 2000);
}

main();

async function main() {
    try {
        console.time('medida-promise');
        const usuario = await obterUsuario();
        // const telefone = await obterTelefone(usuario.id);
        // const endereco = await obterEnderecoAsync(usuario.id);

        const resultado = await Promise.all([ // Resolver Promise da forma correta melhora a performance
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ]);

        const endereco = resultado[1];
        const telefone = resultado[0];
        
        console.log(`
            Nome: ${usuario.nome}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            Endereço: ${endereco.rua}, ${endereco.numero}
        `);
        console.timeEnd('medida-promise');
    } catch (error) {
        console.log('DEU RUIM', error);
    }
}