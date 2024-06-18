const validateDescription = (request, response, next) => {
    const { body } = request;
    if (body.Descricao == undefined) {
        return response.status(400)
            .json({ message: 'O campo "Descricao" é obrigatório' });
    }
    if (body.Descricao === '') {
        return response.status(400)
            .json({ message: 'O campo "Descricao" não pode ser vazio' });
    }
    next();
};
module.exports = { validateDescription };