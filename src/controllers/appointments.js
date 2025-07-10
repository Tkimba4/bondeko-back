import { Router } from "express";
import db from "../config/db/db.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const appointments = db
      .prepare(
        `
      SELECT 
        a.id as id, 
        first_name,
        last_name,
        sex,
        birthday,
        email,
        phone,
        date,
        time,
        s.name as service,
        motif,
        state,
        a.created_at as created_at
      FROM Appointments as a 
      INNER JOIN Services as s 
      ON a.service_id = s.id
      ORDER BY created_at DESC
      `
      )
      .all();
    res.json(appointments);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const appointment = db
      .prepare("SELECT * FROM Appointments WHERE id= ?")
      .run(id);
    if (!appointment) {
      return res.status(404).send("Appointments not fund");
    }
    return res.json(appointment);
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
      birthday,
      date,
      time,
      service,
      motif,
    } = req.body;
    db.prepare(
      "INSERT INTO Appointments (first_name, last_name, email, phone, birthday, date, time, service_id, motif ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
    ).run(
      first_name,
      last_name,
      email,
      phone,
      birthday,
      date,
      time,
      service,
      motif
    );
    return res.status(201).send();
  } catch (error) {
    console.log(error);

    return res.status(500).send();
  }
});
router.patch("/:id/", async (req, res) => {
  const states = ["CANCELED", "CONFIRMED"];

  try {
    const id = req.params.id;
    const state = req.body.state;

    if (states.includes(state)) {

      db.prepare("UPDATE appointments SET state = ? WHERE id = ?").run(
        state,
        id
      );
      
      return res.status(204).send();
    }
    return res.status(400).send();

  } catch (error) {
    return res.status(500).send();
  }
});

// router.put("/:id", async (req, res) => {});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    db.prepare("DELETE FROM appointments WHERE id = ?").run(id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json();
  }
});

export default router;
