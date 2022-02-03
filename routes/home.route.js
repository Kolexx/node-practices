const express = require("express");
const router = express.Router();
const newscontrollers = require("../controllers/news.contollers");
const checkNumber = require("../middleware/news.middleware");

// router.get("/", (req, res) => {
//   res.send("Hello SkillUp");
// });

router.get("/news", checkNumber, newscontrollers.create);

module.exports = router;
