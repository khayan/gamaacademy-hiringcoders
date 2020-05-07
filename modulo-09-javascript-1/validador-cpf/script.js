console.log("Javascript carregado!");

function validacao() {
    console.log("Iniciando validação de CPF...");
    
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    
    var cpf = document.getElementById('cpf_input').value;
    console.log(`Seu CPF é ${cpf}`);

    var resultado_validarCPF = validarCPF(cpf);

    resultado_validarCPF ?
    document.getElementById('success').style.display = 'block' :
    document.getElementById('error').style.display = 'block';
}

function validarCPF(cpf) {
    
    console.log(`Seu CPF tem ${cpf.length} dígitos`);
    
    if (cpf.length != 11) {
        console.log("CPF inválido! CPF precisa ter 11 dígitos");
        return false;   
    } else {
        console.log("OK, CPF válido!");

        let numeros = cpf.substring(0, 9);
        console.log(`Números do CPF: ${numeros}`);

        let digitos = cpf.substring(9);
        console.log(`Dígitos do CPF: ${digitos}`);

        // Verificando o primeiro dígito do CPF
        var soma = 0;

        /*
            Verificando cada um dos chars da variável soma
            De 10 até 1, ou seja, os 9 primeiros números do CPF
        */
        for (let i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }

        /*
            Se o RESTO da divisão entre a
            soma dos 9 primeiros dígitos do CPF
            for MENOR do que 2, então,
            o primeiro dígito verificador do CPF
            é igual a ZERO, senão,
            é igual a 11 - (soma % 11)
        */
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)

        /* 
            Se o número obtido em RESULTADO
            for o mesmo da posição 0 em DIGITOS,
            então o primeiro dígito é válido...
        */
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        // Verificando o segundo dígito do CPF
        soma = 0;
        numeros = cpf.substring(0, 10);

        /*
            Verificando cada um dos chars da variável soma
            De 11 até 2, ou seja, os 10 primeiros números do CPF
        */
        for (let i = 11; i > 1; i--) {
            soma += numeros.charAt(11 - i) * i;
        }

        /*
            Se o RESTO da divisão entre a
            soma dos 10 primeiros dígitos do CPF
            for MENOR do que 2, então,
            o segundo dígito verificador do CPF
            é igual a ZERO, senão,
            é igual a 11 - (soma % 11)
        */
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)

        /* 
            Se o número obtido em RESULTADO
            for o mesmo da posição 1 em DIGITOS,
            então o segundo dígito é válido...
        */
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        /*
            Se o CPF têm 11 digitos e,
            ambas as verificações de dígitos
            forem VERDADEIRAS, então,
            o CPF é válido!
        */
        return true;
    }
}