# API REST com Node.js, Express e Sequelize

Este projeto é uma API REST desenvolvida com **Node.js**, **Express** e **Sequelize**, integrada a um banco de dados SQL. A API gerencia entidades como **Pessoas**, **Cursos**, **Categorias** e **Matrículas**, permitindo operações CRUD (Create, Read, Update, Delete) e consultas específicas.

## Funcionalidades

- Gerenciamento de **Pessoas** (estudantes e docentes).
- Gerenciamento de **Cursos**, vinculados a categorias e docentes.
- Gerenciamento de **Categorias** para organização dos cursos.
- Gerenciamento de **Matrículas**, vinculando estudantes a cursos.
- Operações CRUD para todas as entidades.
- Relacionamentos entre entidades utilizando o ORM Sequelize.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework para criação de APIs REST.
- **Sequelize**: ORM para integração com banco de dados SQL.
- **SQLite**: Banco de dados utilizado no ambiente de desenvolvimento.
- **ESLint**: Ferramenta para padronização de código.
- **Nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

## Estrutura do Projeto
```
├── server.js               # Arquivo principal para iniciar o servidor
├── src/
│   ├── app.js             # Configuração do Express e rotas
│   ├── config/            # Configurações do banco de dados
│   ├── controllers/       # Controladores para cada entidade
│   ├── migrations/        # Arquivos de migração do banco de dados
│   ├── models/            # Definições dos modelos Sequelize
│   ├── routes/            # Rotas da API
│   ├── seeders/           # Seeders para popular o banco de dados
│   └── services/          # Serviços para lógica de negócios
├── arquivos-base/         # Dados base para seeders
├── database.sqlite        # Banco de dados SQLite (desenvolvimento)
├── package.json           # Dependências e scripts do projeto
└── .eslintrc.json         # Configuração do ESLint
```


## Como Executar o Projeto

1. **Clone o repositório**:
   ```
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```
2. **Instale as dependências**:
   ```
   npm install 
   ```
3. **Configure o banco de dados: O projeto já está configurado para usar SQLite no ambiente de desenvolvimento. O arquivo de configuração está em src/config/config.json.**

4. **Execute as migrações e seeders:**
   ```
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```
5. **Inicie o servidor.**

6. **Acesse a API**:
O servidor estará disponível em `http://localhost:3000`.

## Endpoints Principais

### Pessoas
- `GET /pessoas`: Lista todas as pessoas.
- `GET /pessoas/:id`: Retorna uma pessoa pelo ID.
- `POST /pessoas`: Cria uma nova pessoa.
- `PUT /pessoas/:id`: Atualiza uma pessoa pelo ID.
- `DELETE /pessoas/:id`: Remove uma pessoa pelo ID.
- `GET /pessoas/:estudanteId/matriculas`: Lista matrículas de um estudante.

### Cursos
- `GET /cursos`: Lista todos os cursos.
- `GET /cursos/:id`: Retorna um curso pelo ID.
- `POST /cursos`: Cria um novo curso.
- `PUT /cursos/:id`: Atualiza um curso pelo ID.
- `DELETE /cursos/:id`: Remove um curso pelo ID.

### Categorias
- `GET /categorias`: Lista todas as categorias.
- `GET /categorias/:id`: Retorna uma categoria pelo ID.
- `POST /categorias`: Cria uma nova categoria.
- `PUT /categorias/:id`: Atualiza uma categoria pelo ID.
- `DELETE /categorias/:id`: Remove uma categoria pelo ID.

### Matrículas
- `POST /pessoas/:estudanteId/matriculas`: Cria uma matrícula para um estudante.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor com **Nodemon**.
- `npx sequelize-cli db:migrate`: Executa as migrações.
- `npx sequelize-cli db:seed:all`: Popula o banco de dados com os seeders.
