const express = require("express");
const router = express.Router();

const {
  createUser,
  getUserById,
  getallUsers
} = require("../controllers/userController");

router.post("/", createUser);
router.get("/:id", getUserById);
router.get("/", getallUsers);


module.exports = router;