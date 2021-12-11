const router = require("express").Router();

router.post("/create", async (req, res) => {
  const test = { username: req.body.username, email: req.body.email, password: req.body.password };

  //   go into db and make user and then send user data to session to populate the client

  req.session.user = test.email;

  res.send(test);
});

module.exports = router;
