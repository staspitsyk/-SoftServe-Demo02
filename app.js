const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/products', require('./modules/pets/pets.routes'));

app.use('/orders', require('./modules/orders/orders.routes'));

app.listen(3000, () => console.log('Server is started'));
