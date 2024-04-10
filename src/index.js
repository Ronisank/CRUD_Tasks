require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const router = require('./routers');
const { verifyJWT } = require('./Middlewares/authToken');

app.use('/tasks', verifyJWT);

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});