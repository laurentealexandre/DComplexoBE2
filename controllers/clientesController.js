const clientesService = require('../services/clientesService');

const findAll = async (request, response) => {
    try {
        const clientes = await clientesService.findAll();
        return response.status(200).json(clientes);
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
};

const save = async (request, response) => {
    try {
        const result = await clientesService.save(request.body);
        return result ? response.status(200).json() : response.status(400).json({ "[ERROR/SERVER]": "Falha ao salvar cliente" });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
};

const update = async (request, response) => {
    try {
        const result = await clientesService.update(request.body);
        return result ? response.status(200).json() : response.status(400).json({ "[ERROR/SERVER]": "Falha ao atualizar cliente" });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
};

const remove = async (request, response) => {
    const { id } = request.params;
    try {
        const result = await clientesService.remove(id);
        return result ? response.status(200).json() : response.status(400).json({ "[ERROR/SERVER]": "Falha ao remover cliente" });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
};

module.exports = {
    findAll,
    save,
    remove,
    update
};
