const { validateNewTask } = require("../Middlewares/validation");
const { tasks } = require("../utils/tasks");


const createTask = async (req, res) => {
    const task = req.body;
    try {
        task.id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
        console.log(task);
        tasks.push(task);
        res.status(201).send({
            message: 'Tarefa criada com sucesso!',
            task: task
        });

    } catch (error) {
        res.status(500).send({ message: 'Erro interno do servidor: ' + error.message });
    }
};

module.exports = { createTask };
