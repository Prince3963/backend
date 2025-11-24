const express = require('express');
const router = express.Router();
const { getAllUser,loginUser,registerUser,updateUser, deleteUser } = require("../controllers/userController");

router.get("/user", getAllUser);

router.post("/registerUser", registerUser);

router.post("/loginUser", loginUser);

router.put("/updateUserById/:id", updateUser);

router.delete("/deleteUserById/:id", deleteUser);

module.exports = router;