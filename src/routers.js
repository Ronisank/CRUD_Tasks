const express = require('express');
const router = express.Router();
const { verifyJWT } = require('./Middlewares/authToken');
const {validateNewTask} = require('./Middlewares/validation');
const { login } = require('./controllers/login');
const { listTasks} = require('./controllers/listTasks');
const { createTask } = require('./controllers/createTasks');



// Rota de login (exemplo)
router.post('/login', login, verifyJWT);

// Rota de listagem de tarefas
router.get('/tasks',listTasks);

// Rota de criação de tarefas (com validação)
router.post('/tasks',validateNewTask, createTask);

// Rotas de atualização e exclusão (adapte com validação se necessário)
// router.put('/tasks/:id', verifyJWT, updateTask);
// router.delete('/tasks/:id', verifyJWT, deleteTask);

module.exports = router;