const express = require("express");
const router = express.Router();
const studentServices = require("../services/studentServices");

router.get("/", async (req, res) => {
  try {
    const students = await studentServices.getAllStudent();
    res.json(students);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await studentService.getStudentById(req.params.id);
    return res.json(student);
  } catch (error) {
    console.log(error);
  }
});

router.get("/category/faculties", async (req, res) => {
  try {
    const faculties = await studentServices.getStudentFaculties();
    return res.json(faculties);
  } catch (error) {
    console.log(error);
  }
});
router.get("/category/grades", async (req, res) => {
  try {
    const studentsAndGrades = await studentServices.getStudentsAndGrades();
    return res.json(studentsAndGrades);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
