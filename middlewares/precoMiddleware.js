const validatePrice = (request, response, next) => {
    const { body } = request;
    if (body.preco == undefined || body.preco === '') {
        return response.status(400)
            .json({ message: 'O campo "preco" é obrigatório' });
    }
    if (isNaN(parseInt(body.preco)) || parseInt(body.preco) < 0 || parseInt(body.preco) > 10000) {
        return response.status(400)
            .json({ message: 'O campo "preco" deve ser inteiro positivo e valor possível' });
    }
    next();
};
module.exports = { validatePrice };