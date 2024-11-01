const express = require("express");
const router = express.Router();

const {createUser,getAllUsers} = require("../controllers/user.controller")

router.post("/register",createUser)
router.get("/users",getAllUsers)

module.exports = router;