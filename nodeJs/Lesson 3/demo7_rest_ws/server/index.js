const express = require('express');

const personsRouter = require('./controllers/personsController');

const app = express();
const PORT = 3000;

/* Middlewares */

// Parse incoming request bodies in a middleware before the handlers, available under the 'req.body' property
app.use('/', express.json())

app.use('/persons', personsRouter);

app.listen(PORT, () => {
  // Entry Point: http://localohost:3000
  console.log(`app is listening at http://localhost:${PORT}`);
});
