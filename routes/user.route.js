const express = require("express");
const router = express.Router();

const {createUser,getAllUsers,login} = require("../controllers/user.controller")

router.post("/register",createUser)
router.get("/users",getAllUsers)
router.post("/login",login)

module.exports = router;