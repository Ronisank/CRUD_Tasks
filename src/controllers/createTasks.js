const validation = require("../Middlewares/validation");
const tasks = require("../utils/tasks");

const createTask = (validation, (req, res) => {
    const newTask = req.body;
    try {
        taskSquema.isValid(newTask)
        .then((valid) => {
            if (valid) {
                newTask.id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
                tasks.push(newTask);
                res.status(201).json(newTask);
        }else {
            res.status(400).json(taskSquema.yup.errors);
        }
    }
    )}catch (error) {
        res.status(400).json({ message: error.message });
    }
});
module.exports = {
    createTask,
};
