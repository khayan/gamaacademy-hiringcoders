const EventEmitter = require('events');
class MeuEmissor extends EventEmitter {

}
const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuarioClick';

meuEmissor.on(nomeEvento, function(click) {
    console.log('um usuário clicou', click)
});

//  SIMULANDO CLIQUES
meuEmissor.emit(nomeEvento, 'na barra de rolagem');
meuEmissor.emit(nomeEvento, 'no ok');

//  SIMULANDO CLIQUES CONTÍNUOS
let count = 0;
setInterval(function() {
    meuEmissor.emit(nomeEvento, 'no ok' + (count++));
}, 1000)

//  MONITORANDO ENTRADA VIA TECLADO
const stdin = process.openStdin();
stdin.addListener('data', function(value) {
    console.log(`Você digitou: ${value.toString().trim()}`);
});