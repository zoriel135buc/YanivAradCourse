const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');

const customersRouter = require('./controllers/customersController');
const productsRouter = require('./controllers/productsController');

const app = express();
const PORT = 3000;

connectDB();

app.use(cors());

app.use(express.json());

app.use('/customers', customersRouter);
app.use('/products', productsRouter);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
