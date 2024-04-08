const yup = require('yup');

const taskSchema = yup.object().shape({
    title: yup.string("Adicione um titulo"),//.required("Erro: Necessário preencher o campo title!"),
    description: yup.string("Adicione um descrição"),//.required("Erro: Necessário preencher o campo description!"),
    dueDate: yup.string("Adicione uma data de conclusão").required("Erro: Necessário preencher o campo duedate!"),
});

const validation = (req, res, next) => {
    try {
        taskSchema.isValid(req.body, { abortEarly: false });
            if(taskSchema.dueDate === " "){
                throw new Error("Erro: Necessário preencher os campos title, description e duedate!");
            }else{
                next();
            }        
    }catch (err) {
        return res.status(400).json({
            erro: true,
            messagem: err.Error
        });
    }
   
};

module.exports = {
    validation,
};