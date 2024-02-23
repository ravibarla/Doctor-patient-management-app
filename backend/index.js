import express from "express";

const app = express();

const port = 3200;

app.listen(() => console.log(port, `listening in the port : ${port}`));
