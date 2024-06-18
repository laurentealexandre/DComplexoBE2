const connection = require('../configs/dbConfiguration');
const findAll = async () => {
    const produtos = await (await connection)
        .execute('SELECT * FROM produtos');
    return produtos[0];
}

const update = async (produtos) => {
    const query = 'UPDATE produtos SET Nome = ?, Descricao = ?, preco = ?, data_atualizado = ? WHERE id = ?';
    const isOk = await (await connection).execute(query, [produtos.Nome, produtos.Descricao, produtos.preco, produtos.data_atualizado, produtos.ID]);
    return isOk[0].affectedRows === 1;
}

const save = async (produtos) => {
    const query = 'INSERT INTO produtos(Nome, Descricao, preco, data_atualizado) VALUES (?, ?, ?, ?)';
    const isOk = await (await connection).execute(query, [produtos.Nome, produtos.Descricao, produtos.preco, produtos.data_atualizado]);
    return isOk[0].affectedRows === 1;
}

const remove = async (id) => {
    const query = 'DELETE FROM produtos WHERE ID = ?';
    const isOk = await (await connection).execute(query, [id]);
    return isOk[0].affectedRows === 1;
}

module.exports = {
    findAll,
    save,
    remove,
    update
};
   