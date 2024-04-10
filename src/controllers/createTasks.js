const { tasks } = require("../utils/tasks");

const createTask = async (req, res) => {
    const task = req.body;
    try {
        task.id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
        console.log(task);
        tasks.push(task);
        res.status(201).send({
            message: 'Task created successfully!',
            task: task
        });

    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error: ' + error.message });
    }
};

module.exports = { createTask };
