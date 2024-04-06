const express = require('express');
const app = express();
const port = 3000;
const router = require('./routers');
const validation  = require('./Middlewares/validation');


app.use(express.json());
app.use(express.Router());
app.use(router);
app.use(validation.validation);



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    });