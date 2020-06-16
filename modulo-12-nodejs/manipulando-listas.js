const service = require('./service');

async function main() {
    try {
        const result = await service.obterPessoas('a');
        const names = [];

        //      FOR
        // console.time('for');
        // for(let i = 0; i <= result.results.length - 1; i++) {
        //     const pessoa = result.results[i];
        //     // console.log(pessoa);
        //     names.push(pessoa.name);
        // }
        // console.timeEnd('for');

        //      FOR IN
        // console.time('for-In');
        for(let i in result.results) {
            const pessoa = result.results[i];
            names.push(pessoa.name);
        }
        // console.timeEnd('for-In');

        //      FOR OF
        // console.time('for-Of');
        for(pessoa of result.results) {
            names.push(pessoa.name);
        }
        // console.timeEnd('for-Of');

        console.log("Nomes: ", names);
    } catch (error) {
        console.error('Erro interno: ', error)
    }
}

main();