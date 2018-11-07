const express = require("express");
const router = express.Router();

const User = require("../models/User");

// @Route   POST /register
// @desc    Registrando novo usuario
// @access  Public
router.post("/register", (req, res) => {
  const newUser = new User({
    username: req.body.password,
    email: req.body.email,
    password: req.body.password,
    cpf: req.body.cpf
  })
    .save()
    .then(warrior =>
      res.json({ success: true, message: "Registrado com sucesso" })
    );
});

// @Route   POST /login
// @desc    Logando usuario
// @access  Public
router.post("/login", (req, res) => {
  const password = req.body.password;
  const email = req.body.email;

  User.findOne({ email }).then(user => {
    if (user.password === password) {
      res.json({
        success: true
      });
    } else {
      res.json({
        success: false,
        message: "error"
      });
    }
  });
});

module.exports = router;
