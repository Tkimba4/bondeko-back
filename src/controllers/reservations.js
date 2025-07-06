import { Router } from "express";
import db from "../config/db/db.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const reservations = db.prepare("SELECT * FROM Reservations").all();
    res.json(reservations);
  } catch (error) {
    res.status(500).send("Server Erro");
  }
});
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const reservation = db
      .prepare("SELECT * FROM Reservations WHERE id= ?")
      .run(id);
    if (!reservation) {
      return res.status(404).send("Reservation not fund");
    }
    return res.json(reservation);
  } catch (error) {
    return res.status(500).send();
  }
});
router.post("/", async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      birhtday,
      day_data,
      day_time,
      service,
      reason,
    } = req.body;
    // console.log(req.body);
    db.prepare(
      `
      INSERT INTO Reservations (
      first_name, last_name, email, phone, birthday, day_date, day_time, service, reason )
      VALUES ? ? ? ? ? ? ? ? ?`
    ).run(
      first_name,
      last_name,
      email,
      phone,
      birhtday,
      day_data,
      day_time,
      service,
      reason
    );
    return res.status(201).send();
  } catch (error) {
    
    return res.status(500).send();
  }
});
router.patch("/:id", async (req, res) => {});
router.put("/:id", async (req, res) => {});

router.delete("/:id", async (req, res) => {});

export default router;
