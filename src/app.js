import express from "express";
import morgan from "morgan";
import cors from "cors";
//routes
import appointments from "./controllers/appointments.js";
import services from "./controllers/services.js";

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
  .use("/bondeko/appointments/", appointments)
  .use("/bondeko/services/", services);
export default app;
