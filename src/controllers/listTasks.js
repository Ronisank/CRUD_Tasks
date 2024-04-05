const tasks = require("../utils/tasks");

const listTasks = (req, res) => {
    res.status(200).send(tasks);
};

module.exports = {
    listTasks,
};