const { Router } = require('express');
const CursoController = require('../controllers/CursoController');

const cursoController = new CursoController();

const router = Router();

router.get('/cursos', (req, res) => cursoController.pegarTodos(req, res));
router.get('/cursos/:id', (req, res) => cursoController.pegarPorId(req, res));
router.post('/cursos', (req, res) => cursoController.criarRegistro(req, res));
router.put('/cursos/:id', (req, res) => cursoController.atualizarRegistro(req, res));
router.delete('/cursos/:id', (req, res) => cursoController.deletarRegistro(req, res));



module.exports = router;