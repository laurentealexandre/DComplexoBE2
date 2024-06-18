const validateName = (request, response, next) => {
    const { body } = request;
    if (body.Nome == undefined) {
        return response.status(400)
            .json({ message: 'O campo "nome" é obrigatório' });
    }
    if (body.Nome === '') {
        return response.status(400)
            .json({ message: 'O campo "nome" não pode ser vazio' });
    }
    next();
};

module.exports = { validateName };