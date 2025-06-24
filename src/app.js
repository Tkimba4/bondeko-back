import express from "express";
import morgan from "morgan";
import cors from "cors";
//routes
import db from "./config/db/sqlite.js";
import reservationRoute from "./routes/reservations.js";
import serviceRouter from "./routes/services.js";

const app = express();

app
  .use(express.json())
  // .use(express.urlencoded({ extended: true }))
  .use(cors())
  .use(morgan("dev"))
  //routes
  .get("/", (req, res) => {
    res.send("Welcom to Bondeko!");
  })
  .use("/bondeko/reservations", reservationRoute)
  .use("/bondeko/services", serviceRouter);
export default app;
