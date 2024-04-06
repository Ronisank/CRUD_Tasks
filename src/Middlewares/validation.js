const yup = require('yup');
const tasks = require("../utils/tasks");

const taskSchema = yup.object().shape({
    title: yup.string("Erro: Necessário preencher o campo title!")
    .required("Erro: Necessário preencher o campo title!"),
    description: yup.string("Erro: Necessário preencher o campo description!")
    .required("Erro: Necessário preencher o campo description!"),
    dueDate: yup.string("Erro: Necessário preencher o campo duedate!")
    .required("Erro: Necessário preencher o campo duedate!"),    
});

const validation = async (req, res, next) => {
    try {
        await taskSchema.validate(req.body, { abortEarly: false });        
        next();
    } catch (err) {
        return res.status(400).json({ 
            erro: true,
            messagem: err.errors
         });
    }
};

module.exports = {
    validation,
    };