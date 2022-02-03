const checkNumber = (req, res, next) => {
  try {
    // console.log(req.query);
    const { number } = req.query;
    if (number < 5) res.send("you're too small");
    next();
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = checkNumber;
