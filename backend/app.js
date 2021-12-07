import cors from "cors";
import voyages from "./api/voyages.route.js";

import express from "express"
//import path from "path"
//import morgan from "morgan";

//import indexRouter from "./routes/index.js"
//import usersRouter from "./routes/users.js"

var app = express();



app.use(cors());
app.use(express.json());

app.use("/api/v1/Voyages", voyages)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))


//app.use(logger("dev"));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());

//app.use("/", indexRouter);
//app.use("/users", usersRouter);

export default app;
