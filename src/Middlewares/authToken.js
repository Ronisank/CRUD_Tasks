const jwt = require('jsonwebtoken')



function verifyJWT(req, res, next) {
    let token = req.headers['x-access-token'];
    try {
        if (!token)
            return res.status(401).send({ auth: false, message: 'No token provided.' });
        jwt.verify(token, process.env.SECRET, (err, decoded) => { // Chama uma callback função verify do jwt passando o token e a chave secreta
            if (err) return res.status(500).send(
                { auth: false, message: 'Failed to authenticate token.' });

                // se tudo estiver ok, salva no request para uso posterior
                req.userId = decoded.id;
                next();
            });
    } catch (error) {
        res.status(500).send('catch do verifyJWT - ' + error);
    }

}

module.exports = {
    verifyJWT,
}