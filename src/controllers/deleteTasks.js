const {tasks} = require('../utils/tasks');

const deleteTask = (req, res) => {
    try {
        const id = req.params.id;
        const task = tasks.findIndex(task => task.id === Number(id));
        console.log(task);
        if (task < 0 || task === !task) {
            console.log(!task);
            return res.status(404).send({message: 'Task not found!'});
        }
        tasks.splice(task, 1);
        res.status(200).send({message: 'Task deleted successfully!'});
    } catch (error) {
        res.status(500).send({message: 'Internal server error : ' + error.message});
    }
};
module.exports = {deleteTask};