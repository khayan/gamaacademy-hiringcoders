const { obterPessoas } = require('./service');

//      FILTER IMPLEMENTADO NO BRAÇO
Array.prototype.meuFilter = function(callback) {
    const lista = [];
    for(index in this) {
        const item = this[index];
        const result = callback(item, index, this);
        // 0, "", null, undefined === false

        if(!result) continue;
        lista.push(item);
    }
    return lista;
}

async function main() {
    try {
        const { results } = await obterPessoas('a');
        // const familiaLars = results.filter(function(item) {
//             /*
//                 Por padrão, retorna um bool
//                 Esse bool informa se vai manter ou remover da lista
//                 false remove da lista
//                 true mantém na lista
//                 caso não encontre retorna -1
//                 caso encontre retorna posição no array
//             */
//             const result = item.name.toLowerCase().indexOf(`lars`) !== -1;
//             return result;
        // });
        const familiaLars = results.meuFilter((item, index, lista) => {
            console.log(`Index: ${index}`, lista.length);
            return item.name.toLowerCase().indexOf('lars') !== -1; // FILTER IMPLEMENTADO NO BRAÇO
        });

        const names = familiaLars.map((pessoa) => pessoa.name);
        console.log(names);

    } catch (error) {
        console.error('DEU RUIM', error);
    }
}

main();