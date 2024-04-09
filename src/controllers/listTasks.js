const {tasks} = require("../utils/tasks");


const listTasks = (req, res) =>{

    try {
        res.status(200).send(tasks);

    } catch (error) {
        res.status(400).send(`catch do list - ${error}`);
    }
};
module.exports = {
    listTasks,
};