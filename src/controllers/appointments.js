import { Router } from "express";
import db from "../config/db/db.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const reservations = db.prepare("SELECT * FROM Reservations INNER JOIN Services ON service_id = Services.id").all();
    res.json(reservations);
  } catch (error) {
    res.status(500).send("Server Error");
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
      birthday,
      day_date,
      day_time,
      service,
      reason,
    } = req.body;
    db.prepare(
      "INSERT INTO Reservations (first_name, last_name, email, phone, birthday, day_date, day_time, service_id, motif ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
    ).run(
      first_name,
      last_name,
      email,
      phone,
      birthday,
      day_date,
      day_time,
      service,
      reason
    );
    return res.status(201).send();
  } catch (error) {
    console.log(error);

    return res.status(500).send();
  }
});
router.patch("/:id/", async (req, res) => {
  const states = [
    "CANCELED",
    "CONFIRMED",

  ]
  
  try {
    const id = req.params.id;
    const state = req.body.state;

    
    if(states.includes(state)){
      // console.log("");
      console.log(id, state);
      
    }
    

    // return res.status(204).send();

    // return 
    // // const state = "";
    // switch (state) {
    //   case "CANCELED":
    //     state = "CANCELED";
    //     break;
    //   case "ACCEPTED":
    //     state = "ACCEPTED";
    //     break;
    //   case "CONFIRMED":
    //     state = "CONFIRMED";
    //     //send mail...
    //     break;
    //   default:
    //     break;
    // }
    db.prepare("UPDATE Reservations SET state = ? WHERE id = ?").run(state, id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).send();
  }
});

// router.put("/:id", async (req, res) => {});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    db.prepare("DELETE FROM Reservations WHERE id = ?").run(id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json();
  }
});

export default router;
