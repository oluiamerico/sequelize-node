class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegarTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistro);
    } catch (error) {
      //erro
    }
  }

  async pegarPorId(req, res) {
    try {
      const { id } = req.params;
      const registro = await this.entidadeService.pegaRegistroPorId(id);
      return res.status(200).json(registro);
    } catch (error) {
      //erro
    }
  }

  async criarRegistro(req, res) {
    try {
      const novoRegistro = await this.entidadeService.criaRegistro(req.body);
      return res.status(201).json(novoRegistro);
    } catch (error) {
      //erro
    }
  }

  async atualizarRegistro(req, res) {
    try {
      const { id } = req.params;
      const registroAtualizado = await this.entidadeService.atualizaRegistro(id, req.body);
      return res.status(200).json(registroAtualizado);
    } catch (error) {
      //erro
    }
  }

  async deletarRegistro(req, res) {
    try {
      const { id } = req.params;
      await this.entidadeService.deletarRegistro(id);
      return res.status(204).send();
    } catch (error) {
      //erro
    }
  }

  
}

module.exports = Controller;