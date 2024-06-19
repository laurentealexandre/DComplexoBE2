const {
    validarTamanhoString,
    validarEmail,
    validarIdade,
    validarPreco,
    validarData
} = require('../middlewares/validations'); // Supondo que você tenha funções de validação implementadas

describe('Testes de validações', () => {
    // Teste para validar tamanho de campos
    it('Deve validar tamanho de campos nome, sobrenome, produto e descrição', () => {
        expect(validarTamanhoString('Nome', 3, 255)).toBe(true);
        expect(validarTamanhoString('Sobrenome', 3, 255)).toBe(true);
        expect(validarTamanhoString('Descricao', 3, 255)).toBe(true);      
        
    });

    // Teste para validar formato de email
    it('Deve validar formato de email', () => {
        expect(validarEmail('email@example.com')).toBe(true);
        expect(validarEmail('email@invalido')).toBe(false);
    });

    // Teste para validar idade
    it('Deve validar idade positiva e menor que 120', () => {
        expect(validarIdade(30)).toBe(true);
        expect(validarIdade(-5)).toBe(false);
        expect(validarIdade(150)).toBe(false);
    });

    // Teste para validar preço
    it('Deve validar preço positivo', () => {
        expect(validarPreco(99.99)).toBe(true);
        expect(validarPreco(-10)).toBe(false);
    });

    // Teste para validar data
    it('Deve validar data entre 1 de Janeiro de 2000 e 20 de Junho de 2024', () => {
        expect(validarData('2023-12-31')).toBe(true);
        expect(validarData('2025-01-01')).toBe(false);
    });

    // Teste para verificar se a chamada ao endpoint /usuarios funciona
    it('Deve verificar se a chamada ao endpoint /usuarios funciona', async () => {
        const response = await request(app).get('/usuarios');
        expect(response.status).toBe(200); // Verifique se o endpoint retorna status 200
    });

    // Teste para verificar se a chamada ao endpoint /clientes possui token
    it('Deve verificar se a chamada ao endpoint /clientes possui token', async () => {
        const response = await request(app).get('/clientes').set('Authorization', 'Bearer seu-token-aqui');
        expect(response.status).toBe(200); // Verifique se o endpoint retorna status 200
    });
});
