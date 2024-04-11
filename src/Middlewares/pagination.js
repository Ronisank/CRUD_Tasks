const { tasks } = require("../utils/tasks"); //* importa o array de tarefas

//? Crie um middleware para fazer a paginação das tarefas
const pagination = (req, res, next) => {
    try {
        const { page = 0, limit = 3 } = req.query; //* Pega os valores de page e limit da query
        if (page < 1 || undefined) {
            return next();

        } else if (tasks.length <= (page - 1) * limit) {
            return res.status(404).send("Page not found");

        } else {
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            const resultTasks = tasks.slice(startIndex, endIndex);
            return res.status(200).send(resultTasks);
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};
module.exports = { pagination };