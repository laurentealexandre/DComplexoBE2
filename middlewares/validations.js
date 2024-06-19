// Exemplo de implementação das funções de validação

function validarTamanhoString(valor, min, max) {
    return valor.length >= min && valor.length <= max;
}

function validarEmail(email) {
    // Expressão regular simples para verificar formato de email
    return /\S+@\S+\.\S+/.test(email);
}

function validarIdade(idade) {
    return idade > 0 && idade < 120;
}

function validarPreco(preco) {
    return preco >= 0;
}

function validarData(data) {
    const dataLimiteInicio = new Date('2000-01-01');
    const dataLimiteFim = new Date('2024-06-20');
    const dataAtual = new Date(data);
    return dataAtual >= dataLimiteInicio && dataAtual <= dataLimiteFim;
}

module.exports = {
    validarTamanhoString,
    validarEmail,
    validarIdade,
    validarPreco,
    validarData
};
