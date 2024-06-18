const express = require('express');
const router = express.Router();

const mysql = require('mysql2/promise');

const produtosController = require('../controllers/produtosController');

const nomeMiddleware = require('../middlewares/nomeMiddleware');
const descricaoMiddleware = require('../middlewares/descricaoMiddleware');
const precoMiddleware = require('../middlewares/precoMiddleware');
const data_atualizadoMiddleware = require('../middlewares/data_atualizadoMiddleware');

/* GET home page. */
router.get('/', produtosController.findAll); 

/* PUT produtos listing. */
router.put('/', produtosController.update); 

/* POST produtos listing. */
router.post('/',nomeMiddleware.validateName,
descricaoMiddleware.validateDescription,
precoMiddleware.validatePrice,
data_atualizadoMiddleware.validateDate,
produtosController.save);

/* DELETE produtos listing. */
router.delete('/:id', produtosController.remove);


module.exports = router;
