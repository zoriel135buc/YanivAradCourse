const express = require("express");
const mongodb = require("./config/db");
const app = express();
const PORT = 8080;
const studentController = require("./controller/studentController");
const gradeController = require(`./controller/gradeController`);

mongodb();
app.use("/grade", gradeController);
app.use("/student", studentController);

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});
