const express = require('express'); 
const router = express.Router(); 

// ? Importação dos controllers e middlewares
const { login } = require('./controllers/login'); 
const { validateNewTask } = require('./Middlewares/validation'); //
const { pagination } = require('./Middlewares/pagination');

const { listTasks } = require('./controllers/listTasks');
const { createTask } = require('./controllers/createTasks');
const { updateTask } = require('./controllers/updateTasks');
const { deleteTask } = require('./controllers/deleteTasks');




// ?Rota de login 
router.post('/login', login);

// Rota de listagem de tarefas
router.get('/tasks', pagination, listTasks);

// Rota de criação de tarefas (com validação)
router.post('/tasks', validateNewTask, createTask);

// Rotas de atualização e exclusão (adapte com validação se necessário)
router.put('/tasks/:id', validateNewTask, updateTask);

//  Rota de exclusão de tarefas
router.delete('/tasks/:id', deleteTask);

module.exports = router; // ?Exportação do router para uso no index.js