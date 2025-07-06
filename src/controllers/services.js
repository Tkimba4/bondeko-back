import { Router } from "express";
import db from "../config/db/db.js";

const router = Router();

router.get("", async (req, res) => {
  try {
    const services = db.prepare("SELECT id, name FROM Services").all();
    return res.json(services);
  } catch (error) {
    return res.status(500).send();
  }
});

export default router;
