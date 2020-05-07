console.log("Javascript carregado!");

function validacao() {
    console.log("Iniciando validação de CPF...");
    
    var cpf = document.getElementById('cpf_input').value;
    console.log(`Seu CPF é ${cpf}`);

    var resultado_validarCPF = validarCPF(cpf);

    resultado_validarCPF ?
        document.getElementById('success').style.display = 'block':
        document.getElementById('error').style.display = 'block';
}

function validarCPF(cpf) {
    return true;
}