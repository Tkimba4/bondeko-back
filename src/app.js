import express from "express";
import morgan from "morgan";
import cors from "cors";
//routes
// import db from "./config/db/index.js";
import reservations from "./controllers/reservations.js";
import services from "./controllers/services.js";
// import serviceRouter from "./routes/services.js";

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
  .use("/bondeko/reservations/", reservations)
  .use("/bondeko/services/", services);
export default app;
