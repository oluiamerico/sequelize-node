const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController');

const categoriaController = new CategoriaController();

const router = Router();

router.get('/categorias', (req, res) => categoriaController.pegarTodos(req, res));
router.get('/categorias/:id', (req, res) => categoriaController.pegarPorId(req, res));
router.post('/categorias', (req, res) => categoriaController.criarRegistro(req, res));
router.put('/categorias/:id', (req, res) => categoriaController.atualizarRegistro(req, res));
router.delete('/categorias/:id', (req, res) => categoriaController.deletarRegistro(req, res));



module.exports = router;