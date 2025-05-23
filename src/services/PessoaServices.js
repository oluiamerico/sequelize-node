const Services = require('./Services');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
  }  

  async pegaMatriculasPorEstudante(id) {
    const estudante = await super.pegaRegistroPorId(id);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }
}

module.exports = PessoaServices;