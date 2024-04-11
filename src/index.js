require('dotenv').config(); // ** Importante ** para usar variáveis de ambiente

const express = require('express'); 
const app = express(); // * instanciando o express
const port = 3000; 
const router = require('./routers'); // * importando o arquivo de rotas
const { verifyJWT } = require('./Middlewares/authToken'); // * importando a função verifyJWT

app.use('/tasks', verifyJWT); // * aplicando o middleware verifyJWT para todas as rotas que começam com /tasks.

app.use(express.json()); // * habilitando o express para receber requisições no formato json

app.use(router); // * aplicando as rotas importadas

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`); 
});