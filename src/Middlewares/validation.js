const validation = (req, res, next) => {
    
    try {
        if (req.title === "" || req.title === null)
            res.status(400).send({
                err: true,
                message: "The title field is mandatory"
            });
        if (!req.description === "")
            res.status(400).send({
                err: true,
                message: "The description field is mandatory"
            });
        if (!req.dueData === "")
            res.status(400).send({
                err: true,
                message: "The dueData field is mandatory"
            });
            next();
    } catch (err) {
        res.status(400).send({
            err: true,
            message: err.message
        });
    }

};

module.exports = {
    validation,
};