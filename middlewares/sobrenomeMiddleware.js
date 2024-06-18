const validateFamilyName = (request, response, next) => {
    const { body } = request;
    if (body.Sobrenome == undefined) {
        return response.status(400)
            .json({ message: 'O campo "sobrenome" é obrigatório' });
    }
    if (body.Sobrenome === '') {
        return response.status(400)
            .json({ message: 'O campo "sobrenome" não pode ser vazio' });
    }
    next();

};
module.exports = { validateFamilyName };
