const express = require("express");
const cors = require("cors");
const controllerCars = require(`../server/controller/controllerCars`);
const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());
app.use("/cars", controllerCars);

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
