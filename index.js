const express = require("express");
const bodyParser = require("body-parser");
const supremaBiometricRoutes = require("./routes/supremaBiometricRoutes");
const hanwhaBiometricRoutes = require("./routes/hanwhaCameraRoutes");
const io = require("./domain/wsConnection");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/supremaBiometric", supremaBiometricRoutes);
app.use("/hanwhaCamera", hanwhaBiometricRoutes);

app.listen(3070, () => {
  console.log("listening on *:3000");
});

io.listen(3071);
