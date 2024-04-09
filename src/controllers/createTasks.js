const {validation} = require("../Middlewares/validation");
const {tasks} = require("../utils/tasks");

const createTask = (validation, (req, res) => {    
    const task = req.body;
    try {      
           task.id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
           tasks.push(task);
           res.status(201).send(`Task created successfully!!!
           ${JSON.stringify(task)}`);
      
    }catch (error) {
        res.status(400).send({ message: error.message });
    }
});
module.exports = {
    createTask,
};
