import "dotenv/config";
import express from "express";
import morgan from "morgan";
import userRoute from "../src/routes/user";

const PORT = process.env.PORT || 3500;
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(userRoute);

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
});
