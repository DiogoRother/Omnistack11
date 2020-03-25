const express = require('express');
const cors = require('cors');
const routes = require('./routes'); /** "./" pra indentificar como um arquivo e nao um pacote na mesma pasta que o arquivo index */


const app= express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
Rota/Recurso
*
*
Métodos HTTP:
*
*GET: Buscar/Listar uma informação do backend
*Post: Criar uma informação do backend
*Put: Alterar uma informação do backend
*Delete: Deletar uma informação do backend
*/

/**
 * Tipos de Parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros,paginacao)
 * Route Params: Parâmetros ultilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */



app.listen(3333);