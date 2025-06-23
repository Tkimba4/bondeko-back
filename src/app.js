import express from "express";
import morgan from "morgan";

//routes
import db from "./config/db.js";
import reservationRoute from "./routes/reservations.js";

const app = express();

app.use(morgan('dev'))
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Welcom to Bondeko!");
});

app.use("/api/reservations", reservationRoute);

export default app;
