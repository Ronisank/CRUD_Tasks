const {tasks} = require("../utils/tasks");


const listTasks = (req, res) =>{
    const task = tasks;
    try {
        res.status(200).send(task);

    } catch (error) {
        res.status(400).send(`catch do list - ${error}`);
    }
};
module.exports = {listTasks};