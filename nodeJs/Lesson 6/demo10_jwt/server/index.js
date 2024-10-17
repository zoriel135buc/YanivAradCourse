const express = require('express');
const cors = require('cors');

const authController = require('./controllers/authController');
const productsController = require('./controllers/productsController');

const app = express();
const PORT = 3000;

app.use(cors());
app.use('/', express.json());

app.use('/auth', authController);
app.use('/products', productsController);

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});
