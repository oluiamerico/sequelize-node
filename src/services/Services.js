const dataSource = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros() {
    return dataSource[this.model].findAll();
  }

  async pegaRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async criaRegistro(dados) {
    return dataSource[this.model].create(dados);
  }

  async atualizaRegistro(id, dados) {
    return dataSource[this.model].update(dados, {
      where: {
        id: id,
      },
    });
  }

  async deletarRegistro(id) {
    return dataSource[this.model].destroy({
      where: {
        id: id,
      },
    });
  }
  
}

module.exports = Services;