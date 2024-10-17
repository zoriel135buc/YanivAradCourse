const express = require("express");
const connectDB = require("./configs/db");

const usersController = require("./controllers/usersController");

const app = express();
const PORT = 3000;

connectDB();

app.use("/users", usersController);

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
