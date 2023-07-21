const express = require("express");
const app = express();
require("./config/database").connect();

require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.use(express.json());


const cal = require("./routes/calculation");
app.use("/api/v1", cal);


let server = app.listen(PORT, () => {
  console.log(`Server started at https://localhost:${server.address().port}`);
});
