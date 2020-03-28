const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const petsRouter = require('./modules/pets/pets.routes');
const errorHandler = require('./middlewares/error-handler')

const app = express();

app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')))

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.use(errorHandler);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is started'));

