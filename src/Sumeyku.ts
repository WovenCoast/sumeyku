import express from "express";
import path from "path";
import { port } from "./Config";
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(port);
