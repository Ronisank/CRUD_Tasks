const { tasks } = require("../utils/tasks");

//? Função para listar as tarefas
const listTasks = (req, res) => {
    try {
        res.status(200).send(tasks);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
module.exports = { listTasks };