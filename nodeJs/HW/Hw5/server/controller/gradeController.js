const express = require(`express`);

const router = express.Router();
const gradeServices = require(`../services/gradeServices`);

router.get("/", async (req, res) => {
  try {
    const grades = await gradeServices.getAllGrades();
    return res.json(grades);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:profession", async (req, res) => {
  try {
    const grades = await gradeServices.getGradesByProfession(
      req.params.profession
    );
    return res.json(grades);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
