const validateAge = (request, response, next) => {
    const { body } = request;
    if (body.Idade == undefined || body.Idade === '') {
        return response.status(400)
            .json({ message: 'O campo "Idade" é obrigatório' });
    }
    if (isNaN(parseInt(body.Idade)) || parseInt(body.Idade) < 0 || parseInt(body.Idade) > 130) {
        return response.status(400)
            .json({ message: 'O campo "Idade" deve ser inteiro positivo e valor possível' });
    }
    next();
};
module.exports = { validateAge };