const express = require("express");
const usersService = require("../services/usersService");
const router = express.Router();

// Entry point: http://localhost:3000/users

// Get All Users
router.get("/", async (req, res) => {
  try {
    const users = await usersService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
