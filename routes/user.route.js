const express = require("express");
const router = express.Router();

const {createUser,getAllUsers,login,getUserById} = require("../controllers/user.controller")

router.post("/register",createUser)
router.get("/users",getAllUsers)
router.post("/login",login)
router.get("/user/:id",getUserById)

module.exports = router;