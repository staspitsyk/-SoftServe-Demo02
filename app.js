const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const petsRouter = require('./modules/pets/pets.routes');
const errorHandler = require('./middlewares/error-handler')

const app = express();

app.use(bodyParser.json());
app.use('/pets', petsRouter);
app.use(errorHandler);

sequelize.sync({ alter: true });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is started'));
