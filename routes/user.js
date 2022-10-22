const express = require("express");
const router = express.Router();
const authmiddleWare = require("../middlewares/authMiddleWare");
// const authMiddleWare2 = require("../middlewares/authMiddleWare2");
const User = require("../models/userModel");

router.get("/get-user-info", authmiddleWare, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.user });
    res.send({
      success: true,
      data: {
        ...user,
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
