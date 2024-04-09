// const { check, validationResult } = require('express-validator');

// const createTaskValidation = [
//     check('title').isString().isLength({ min: 5}).not().isEmpty().withMessage('O título é obrigatório'),
//     check('description').isLength({ min: 5}).isString().not().isEmpty().withMessage('A descrição deve ter no mínimo 5 caracteres'),
//     check('dueData').isString().not().isEmpty().withMessage('A Data de conclusão é obrigatória'),
// ];
// const validation = (req, res) => {
//     const errors = validationResult(req);
  
//     if (!errors.isEmpty()) {
//       res.status(400).json({ errors: errors.array() });
//       return;
//     }
// };
// exports.module = {validation, createTaskValidation};

//const validation = (req, res, next) => {
    
    //     try {
    //         if (req.title === "" || req.title === null)
    //             res.status(400).send({
    //                 err: true,
    //                 message: "The title field is mandatory"
    //             });
    //         if (!req.description === "")
    //             res.status(400).send({
    //                 err: true,
    //                 message: "The description field is mandatory"
    //             });
    //         if (!req.dueData === "")
    //             res.status(400).send({
    //                 err: true,
    //                 message: "The dueData field is mandatory"
    //             });
    //             next();
    //     } catch (err) {
    //         res.status(400).send({
    //             err: true,
    //             message: err.message
    //         });
    //     }
    
    // };
    
    // module.exports = {
    //     validation,
    // };
