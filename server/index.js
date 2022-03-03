const { pingpong } = require("./src/routes/pingpong.js");
const { error } = require("./src/routes/error.js");
const { setup } = require("./src/middlewares/settup");
const express = require("express");

const app = express();
const PORT = process.env.PORT;

app.use(setup);
app.use([pingpong, error]);

app.listen(PORT, () => {
  console.log(
    "+++++++++++++++_SERVER_RUN_IN_PORT:_" + PORT + "+++++++++++++++"
  );
});
