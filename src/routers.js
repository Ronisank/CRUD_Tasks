const express = require('express');
const {listTasks} = require('./controllers/listTasks');
const {createTask} = require('./controllers/createTasks');
const {updateTask} = require('./controllers/updateTasks');
const {deleteTask} = require('./controllers/deleteTasks');
const {validation} = require('./Middlewares/validation');



const router = express();

router.use("/tasks",validation);


router.get('/tasks', listTasks);
router.post('/tasks', createTask);
//router.put('/tasks/:id', updateTasks);
//router.delete('/tasks/:id', deleteTasks);

module.exports = router;
