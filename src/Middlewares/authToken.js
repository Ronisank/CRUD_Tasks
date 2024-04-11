const jwt = require('jsonwebtoken') // * Importa o módulo jwt

//? Função que verifica se o token é válido
function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    try {
        if (!token)
            return res.status(401).send({ auth: false, message: 'No token provided.' });

        // ?Chama uma callback para o verify do jwt passando o token e a chave secreta para descriptografar
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) return res.status(500).send(
                { auth: false, message: 'Failed to authenticate token.' });

            //* se tudo estiver ok, salva no request para uso posterior
            req.userId = decoded.id;
            next();
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

module.exports = {
    verifyJWT,
}