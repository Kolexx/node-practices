//require package
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const { PORT, BASE_URL } = process.env;

//

//installing packages
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Routes
app.use("/api", require("./routes/home.route"));

//server listener
// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.listen(process.env.PORT || 3000, () => {
  console.log(`running on Port 3000  ${BASE_URL}:${PORT}`);
});
