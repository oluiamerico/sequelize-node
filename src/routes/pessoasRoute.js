const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const pessoaController = new PessoaController();

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.pegarTodos(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.pegarPorId(req, res));
router.post('/pessoas', (req, res) => pessoaController.criarRegistro(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualizarRegistro(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.deletarRegistro(req, res));



module.exports = router;