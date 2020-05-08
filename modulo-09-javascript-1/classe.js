class Matematica {

    // Métodos 

    soma(n1, n2) {
        let resultado = n1 + n2;
        return `${n1} + ${n2} = ${resultado}`;
    }

    subtracao(n1, n2) {
        let resultado = n1 - n2;
        return `${n1} - ${n2} = ${resultado}`;
    }

    multiplicacao(n1, n2) {
        let resultado = n1 * n2;
        return `${n1} x ${n2} = ${resultado}`;
    }

    tabuada(n1, n2) {
        for (let multiplicador = n1; multiplicador <= n2; multiplicador++) {
            console.log("----------------");
            console.log(`Tabuada do ${multiplicador}!!!`);
            console.log("----------------");
            for (let multiplicando = 0; multiplicando <= 10; multiplicando++) {
                let produto = multiplicador*multiplicando;
                console.log(`${multiplicador} x ${multiplicando} = ${produto}`);    
            }
        }
        return `Tabuadas do ${n1} ao ${n2} feitas!`;
    }

    divisao(n1, n2) {
        let resultado = n1 / n2;
        return `${n1} / ${n2} = ${resultado}`;
    }

    potenciacao(n1, n2) {
        let resultado = n1 ** n2;
        return `${n1} ^ ${n2} = ${resultado}`;
    }

    raizQuadrada(n1) {
        let resultado;
        if(n1 >= 0) {
            resultado = Math.sqrt(n1);
        } else {
            n1 *= -1;
            resultado = `${Math.sqrt(n1)}i`;
            n1 *= -1
        }
        return `Raiz quadrada de ${n1} é ${resultado}`
    }

    delta(a, b, c) {
        return (b ** 2) - (4 * a * c);
    }

    bhaskaraPositivo(a, b, c) {
        return (-b + (Math.sqrt(this.delta(a, b, c)))) / (2 * a);
    }

    bhaskaraNegativo(a, b, c) {
        return (-b - (Math.sqrt(this.delta(a, b, c)))) / (2 * a);

    }

    bhaskara (a, b, c) {
        return `${a}x² + ${b}x + ${c} = 0
        x' = ${this.bhaskaraPositivo(a, b, c)}
        x'' = ${this.bhaskaraNegativo(a, b, c)}`;
    }
}

var instanciaMatematica = new Matematica();

console.log(instanciaMatematica.soma(1, 12)); // 13
console.log(instanciaMatematica.subtracao(1, 12)); // -11
console.log(instanciaMatematica.multiplicacao(2, 5)); // 10
console.log(instanciaMatematica.divisao(10, 2)); // 5
console.log(instanciaMatematica.potenciacao(5, 3)); // 125
console.log(instanciaMatematica.raizQuadrada(25)); // 5
console.log(instanciaMatematica.raizQuadrada(-16)); // 4i
console.log(instanciaMatematica.bhaskara(1, 12, -13)); // x' = 1 x'' = -13
console.log(instanciaMatematica.bhaskara(2, -16, -18)); // x' = 9 x'' = -1
console.log(instanciaMatematica.tabuada(0, 30)); // Tabuadas do 0 ao 30 feitas!