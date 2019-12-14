const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../");

router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);

  user.password = hash;
});

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
