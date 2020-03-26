const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./db');

const productsController = require('./modules/products/products.controller');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/products', require('./modules/products/products.routes'));

// sequelize.sync({ alter: true }).then( () => productsController.createMany());

app.listen(3000, () => console.log('Server is started'));
