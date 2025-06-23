import { Router } from "express";
import {
  addReservation,
  deleteReservation,
  getAllReservations,
  getReservation,
  updateReservation,
} from "../controllers/reservations.js";

const router = Router();

router.get("/", getAllReservations);
router.get(":id", getReservation);
router.post("", addReservation);
router.put("/", updateReservation);
router.delete("/", deleteReservation);

export default router;
