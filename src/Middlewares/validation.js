const yup = require('yup');


const linkSchema = yup.object().shape({
    title: yup.string().min(3).required(),
    description: yup.string().min(5).required(),
    conclusion: yup.string().min(10, "Date format - DD/MM/YYYY").required(),
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


