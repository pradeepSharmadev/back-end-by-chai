import express from "express";
import cors from "cors";

const app = express();

const port = process.env.PORT || 3001;

// for all root  cross origin

app.use(cors());
//only for one sigle root cors
// app.get("/products/:id", cors(), function (req, res, next) {
//   res.json({ msg: "This is CORS-enabled for a Single Route" });
// });
app.get("/", (req, res) => {
  const message = `Hello World! I am Pradeep`;
  res.send(message);
});

const data = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
  },
  {
    name: "Jim Brown",
    email: "jimbrown@example.com",
  },
  {
    name: "Janet White",
    email: "janetwhite@example.com",
  },
  {
    name: "Joe Black",
    email: "joeblack@example.com",
  },
  {
    name: "Julia Green",
    email: "juliagreen@example.com",
  },
  {
    name: "Jesse Blue",
    email: "jesseblue@example.com",
  },
  {
    name: "Joy Gray",
    email: "joygray@example.com",
  },
];
app.get("/api/data", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
