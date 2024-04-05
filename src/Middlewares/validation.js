const yup = require('yup');

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
        await taskSchema.validate(req.body);
        next();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
module.exports = validation;