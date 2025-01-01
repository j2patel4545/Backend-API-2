import express from 'express';
import { connectDB } from './Database/Db.js';
import UserRouter from './Routers/UserRouter.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = 7898;
const app = express();

app.use(cors());
app.use(bodyParser.json()); // Correct usage of body-parser
app.use(bodyParser.urlencoded({ extended: true })); // Add this for handling form data if needed

connectDB();

app.use("/user", UserRouter);

app.get("/", (req, res) => {
    res.send("Server is Running Successfully..!");
});

app.listen(PORT, () => {
    console.log(`Server is Running on port http://localhost:${PORT}`);
});
