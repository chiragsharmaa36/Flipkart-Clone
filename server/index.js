import express from "express";
import dotenv from "dotenv";

import Connection from "./database/db.js"; //here in backend extension is compulsory.
import DefaultData from "./default.js";

const app = express();

dotenv.config();

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

DefaultData();