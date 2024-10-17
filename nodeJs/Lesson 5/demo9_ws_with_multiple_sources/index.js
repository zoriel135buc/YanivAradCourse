const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');

const carsRouter = require('./controllers/carsController');
const usersRouter = require('./controllers/usersController');
const personsRouter = require('./controllers/personsController');

const app = express();
const PORT = 3000;

connectDB();

app.use(cors());

app.use('/', express.json());

app.use('/cars', carsRouter); // JSON file
app.use('/users', usersRouter); // Web Service
app.use('/persons', personsRouter); // DB

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});
