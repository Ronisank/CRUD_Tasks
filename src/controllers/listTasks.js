const {tasks} = require("../utils/tasks");


const listTasks = (req, res) =>{
    const task = tasks;
    try {
        //Página atual
        const {page = 1} = req.query;
        console.log(page);

        //Limite de tarefas por página
        const limit = 3;
//Calculo para exibir as tarefas de acordo com a página
        lastPage = 1

        const countTasks = task.length;
        console.log(countTasks);
//Calculo para exibir as tarefas de acordo com a página
if (countTasks != 0){
    lastPage = Math.ceil(countTasks / limit);
    res.status(200).send(task);

    console.log(lastPage);
}else{
    return res.status(400).json({ mensage: "Não há tarefas cadastradas"});
    
}


    } catch (error) {
        res.status(400).send(`catch do list - ${error}`);
    }
};
module.exports = {listTasks};