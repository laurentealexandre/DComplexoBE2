const express = require('express');
const router = express.Router();

const mysql = require('mysql2/promise');

const usuariosController = require('../controllers/usuariosController');

const nomeMiddleware = require('../middlewares/nomeMiddleware');
const descricaoMiddleware = require('../middlewares/descricaoMiddleware');
const precoMiddleware = require('../middlewares/precoMiddleware');
const data_atualizadoMiddleware = require('../middlewares/data_atualizadoMiddleware');

/* GET home page. */
router.get('/', usuariosController.findAll); 

/* PUT usuarios listing. */
router.put('/', usuariosController.update); 

/* POST usuarios listing. */
router.post('/',usuariosController.save);

/* DELETE usuarios listing. */
router.delete('/:id', usuariosController.remove);


module.exports = router;
