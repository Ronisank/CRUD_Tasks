const { tasks } = require('../utils/tasks');

//? Função para atualizar uma tarefa
const updateTask = (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, conclusion } = req.body;

        const task = tasks.find(task => task.id === Number(id));

        if (!task) {
            return res.status(404).send({ message: 'Task not found!' });
        }
        task.title = title;
        task.description = description;
        task.conclusion = conclusion;
        res.status(200).send({ message: 'Task updated successfully! ', task });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = { updateTask };