const router = require("express").Router();
const db = require("../../models");

// Routes
// =============================================================

router.get("/", async (req, res) => {
  const userData = await db.Users.findAll();
  res.json(userData);
});

/*




*/
router.post("/create", async (req, res) => {
  await db.Users.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then(async (data) => {
      // Set the user's email to the session user
      req.session.user = data.dataValues.email;

      // ====================================
      // await sudoku.allPuzzleIDAndDifficulty(req, res);
      return res.send(true);
    })
    .catch((err) => {
      if (err) {
        const errorData = [];
        err.errors.map((index) => errorData.push(index.message));
        req.session.errorData = { createAcc: errorData };
        return res.send(false);
      }
    });

  //   go into db and make user and then send user data to session to populate the client
});

module.exports = router;
