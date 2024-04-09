const { user } = require('../utils/userInfo');
const jwt = require('jsonwebtoken');


const login = (req, res, next) => {
    let { id, name, password } = req.body;
    try {

        if (name === user.name && password === user.password) {
            //auth ok
            //id = user.id; //esse id viria do banco de dados
            let token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 300 // expires in 5min
            });

            res.status(200).send({ auth: true, token: token });
        }
    } catch (error) {

        res.status(500).send('Login inválido!' + error);
    }

}

module.exports = {
    login,
}