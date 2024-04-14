const yup = require('yup'); //* Importa o yup

//? Schema de validação para a criação e atualização de tarefas
const linkSchema = yup.object().shape({
    title: yup.string().min(3).required(),
    description: yup.string().min(5).required(),
    conclusion: yup.string().min(10, "Date format - DD/MM/YYYY").required(),
    id: yup.number(),
});

//? Middleware para validar a criação de tarefas
async function validateNewTask(req, res, next) {
    try {
        const validate = await linkSchema.validate(req.body); //* Valida o body da requisição
        req.body = validate; //* Se passar na validação, o body da requisição é atualizado
        next();

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { validateNewTask };


