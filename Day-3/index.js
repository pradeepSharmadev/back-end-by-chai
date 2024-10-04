require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("server is start");
  res.send(`This is mms from server ${port}`);
});
app.get("/chai", (req, res) => {
  res.send("server is start ! Pradeep kumar sharma");
});

app.listen(port, () => {
  console.log(`Server is ready at port: ${port}`);
});
