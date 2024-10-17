const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');

const personsRouter = require('./controllers/personsController');

const app = express();
const PORT = 3000;

connectDB();

app.use(cors());

app.use('/', express.json());

app.use('/persons', personsRouter);

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});
