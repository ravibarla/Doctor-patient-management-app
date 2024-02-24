//import dependencies
import express, { json, urlencoded } from "express";




//import routes
import apiRouter from "./routes/api/index.js";

//import mongoconfig
import { db } from "./mongoConfig/config.js";

//set up express app
const app = express();

//set up port
const port = 3200;

//call middleware: router
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRouter);

//set up listening app
app.listen(port, () => console.log(`listening in the port : ${port}`));

