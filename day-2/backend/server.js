// const express = require("express");
import express from "express";     //fix error (node:10604) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("dist"))

app.get("/", (req,res)=>{
    res.send("server is ready");
});

const jokes = [
  {
    serialNo: 1,
    joke: "Why did the tomato turn red? Because it saw the salad dressing!",
    title: "Food Joke",
  },
  {
    serialNo: 2,
    joke: "Why did the chicken go to the seance? To talk to the other side!",
    title: "Chicken Joke",
  },
  {
    serialNo: 3,
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    title: "Award Joke",
  },
  {
    serialNo: 4,
    joke: "Why did the computer go to the doctor? Because it had a virus!",
    title: "Computer Joke",
  },
  {
    serialNo: 5,
    joke: "Why did the bicycle fall over? Because it was two-tired!",
    title: "Bicycle Joke",
  },
  {
    serialNo: 6,
    joke: "Why did the coffee file a police report? It got mugged!",
    title: "Coffee Joke",
  },
  {
    serialNo: 7,
    joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    title: "Golf Joke",
  },
  {
    serialNo: 8,
    joke: "Why did the duck go to the library? To get a new quack!",
    title: "Duck Joke",
  },
  {
    serialNo: 9,
    joke: "Why did the banana go to the doctor? Because it wasn't peeling well!",
    title: "Banana Joke",
  },
  {
    serialNo: 10,
    joke: "Why did the telephone go to the gym? To improve its dial-ing!",
    title: "Telephone Joke",
  },
];

// for best practices use url stander uses 
app.get("/api/jokes" , (req, res )=>{
    res.send(jokes);
});

app.listen(port , ()=>{
    console.log(`server is listening at port ${port}`)
});

