const validateDate = (request, response, next) => {
    const { body } = request;
    if (body.data_atualizado == undefined || body.data_atualizado === '') {
        return response.status(400)
            .json({ message: 'O campo "data_atualizado" é obrigatório' });
    }
    if (isNaN(parseInt(body.data_atualizado)) || parseInt(body.data_atualizado) < 0 || parseInt(body.data_atualizado) > 100000000) {
        return response.status(400)
            .json({ message: 'O campo "data_atualizado" deve ser inteiro positivo e valor possível' });
    }
    next();
};
module.exports = { validateDate };