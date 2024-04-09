const yup = require('yup');


const linkSchema = yup.object().shape({
    title: yup.string().min(3).required("O título é obrigatório"),
    description: yup.string().min(5).required("A descrição é obrigatória"),
    conclusion: yup.string().required("A conclusão é obrigatória"),
    id: yup.number(),
});

async function validateNewTask(req, res, next) {
    try {
        const validate = await linkSchema.validate(req.body);
            req.body = validate;
            next();    
     
    }catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

module.exports = { validateNewTask };


