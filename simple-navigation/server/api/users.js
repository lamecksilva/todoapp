const express = require("express");
const router = express.Router();

const User = require("../models/User");


router.post("/register", (req,res) => {
  res.send({message: "register route"})
})
// @route
// @desc
// @access
router.post("/login", (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
});

module.exports = router;
