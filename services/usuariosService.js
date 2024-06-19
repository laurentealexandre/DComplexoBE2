const connection = require('../configs/dbConfiguration');
const findAll = async () => {
    const usuarios = await (await connection)
        .execute('SELECT * FROM usuarios');
    return usuarios[0];
}

const update = async (usuarios) => {
    const query = 'UPDATE usuarios SET usuario = ?, senha = ?, token = ?, WHERE id = ?';
    const isOk = await (await connection).execute(query, [usuarios.usuario, usuarios.senha, usuarios.token, usuarios.ID]);
    return isOk[0].affectedRows === 1;
}

const save = async (usuarios) => {
    const query = 'INSERT INTO usuarios(Nome, senha, token) VALUES (?, ?, ?, ?)';
    const isOk = await (await connection).execute(query, [usuarios.usuario, usuarios.senha, usuarios.token, usuarios.ID]);
    return isOk[0].affectedRows === 1;
}

const remove = async (id) => {
    const query = 'DELETE FROM usuarios WHERE ID = ?';
    const isOk = await (await connection).execute(query, [id]);
    return isOk[0].affectedRows === 1;
}

module.exports = {
    findAll,
    save,
    remove,
    update
};
   