const router = require("express").Router();


router.get("/", (req, res) => {

  if (req.session.countVisit) {
    // If the 'countVisit' session variable exists, increment it by 1 and set the 'firstTime' session variable to 'false'
    req.session.countVisit++;
    req.session.firstTime = false;
  } else {
    // If the 'countVisit' session variable doesn't exist, set it to 1 and set the 'firstTime' session variable to 'true'
    req.session.countVisit = 1;
    req.session.firstTime = true;
  }

  const initData = {
    countVisit: req.session.countVisit,
    firstTime: req.session.firstTime,
    user: req.session.user ? req.session.user : "",
    errorData: req.session.errorData ? req.session.errorData : ""
  };

  res.render("landing", initData);
});

module.exports = router