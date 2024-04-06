const {tasks} = require("../utils/tasks");
const {validation} = require("../Middlewares/validation");

const listTasks = (validation,(req, res) => {
    try {
        res.status(200).send(tasks);
        
    } catch (error) {
        res.status(400).send(`catch do list - ${error}`);
    }
});

module.exports = {
    listTasks,
};