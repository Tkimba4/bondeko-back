import express from "express";

//routes
import reservationRoute from "./routes/reservations.js";

const app = express();

app.use(express.json());

app.use("api/reservations", reservationRoute);

app.get("/", (req, res) => {
  res.send("Welcom to Bondeko!");
});


export default app;
