const { tasks } = require("../utils/tasks"); //* Importa o array de tarefas

//? Função para criar uma nova tarefa
const createTask = async (req, res) => { 
    const task = req.body;
    try {
        //* Adiciona um id a tarefa
        task.id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
        //* Adiciona a tarefa ao array de tarefas
        tasks.push(task);
        //* Retorna a tarefa criada
        res.status(201).send({
            message: 'Task created successfully!',
            task: task
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createTask };
