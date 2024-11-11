const express = require("express");
const router = express.Router();

const {createUser,getAllUsers,login,getUserById, deleteUserById, updateUserById} = require("../controllers/user.controller")

router.post("/register",createUser)
router.get("/users",getAllUsers)
router.post("/login",login)
router.get("/user/:id",getUserById)
router.delete("/user/:id",deleteUserById)
router.put("/user/:id",updateUserById)

module.exports = router;