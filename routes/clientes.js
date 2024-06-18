const express = require('express');
const router = express.Router();

const mysql = require('mysql2/promise');

const clientesController = require('../controllers/clientesController');

const nomeMiddleware = require('../middlewares/nomeMiddleware');
const sobrenomeMiddleware = require('../middlewares/sobrenomeMiddleware');
const idadeMiddleware = require('../middlewares/idadeMiddleware');

/* GET home page. */
router.get('/',clientesController.findAll); 

/* PUT clientes listing. */
router.put('/',clientesController.update); 

/* POST clientes listing. */
router.post('/',nomeMiddleware.validateName,
sobrenomeMiddleware.validateFamilyName,
idadeMiddleware.validateAge,
clientesController.save);


/* DELETE clientes listing. */
router.delete('/:id', clientesController.remove);

module.exports = router;
