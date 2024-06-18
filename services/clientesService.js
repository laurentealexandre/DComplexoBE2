const connection = require('../configs/dbConfiguration');
const { cache, logger } = require('../configs/cacheConfig');

const findAll = async () => {
  const cacheKey = 'allClients';
  const cachedClients = cache.get(cacheKey);

  if (cachedClients) {
    logger.info('Exibido do cache');
    return cachedClients;
  }

  try {
    const [clientes] = await (await connection).execute('SELECT * FROM clientes');

    cache.set(cacheKey, clientes);
    logger.info('Exibido do banco de dados');

    return clientes;
  } catch (error) {
    logger.error(`Database error: ${error.message}`);
    throw new Error('Internal Server Error');
  }
};

const update = async (cliente) => {
  const query = 'UPDATE clientes SET Nome = ?, Sobrenome = ?, Email = ?, Idade = ? WHERE id = ?';
  try {
    const [result] = await (await connection).execute(query, [cliente.Nome, cliente.Sobrenome, cliente.Email, cliente.Idade, cliente.ID]);

    if (result.affectedRows === 1) {
      invalidateCache(); 
      logger.info('Bd atualizado e cache invalidado');
    }

    return result.affectedRows === 1;
  } catch (error) {
    logger.error(`Database error: ${error.message}`);
    throw new Error('Internal Server Error');
  }
};

const save = async (cliente) => {
  const query = 'INSERT INTO clientes(Nome, Sobrenome, Email, Idade) VALUES (?, ?, ?, ?)';
  try {
    const [result] = await (await connection).execute(query, [cliente.Nome, cliente.Sobrenome, cliente.Email, cliente.Idade]);

    if (result.affectedRows === 1) {
      invalidateCache(); 
      logger.info('Adicionado ao BD e cache invalidado');
    }

    return result.affectedRows === 1;
  } catch (error) {
    logger.error(`Database error: ${error.message}`);
    throw new Error('Internal Server Error');
  }
};

const remove = async (id) => {
  const query = 'DELETE FROM clientes WHERE ID = ?';
  try {
    const [result] = await (await connection).execute(query, [id]);

    if (result.affectedRows === 1) {
      invalidateCache(); 
      logger.info('Deletado do BD e cache invalidado');
    }

    return result.affectedRows === 1;
  } catch (error) {
    logger.error(`Database error: ${error.message}`);
    throw new Error('Internal Server Error');
  }
};


const invalidateCache = () => {
  cache.del('allClients');
};

module.exports = {
  findAll,
  save,
  remove,
  update
};
