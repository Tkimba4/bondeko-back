import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("All reservations");
});
router.get(":id", (req, res) => {
  res.send("One reservations");
});
router.post("", (req, res) => {
  res.send("Insert reservation");
});
router.put("/", (req, res) => {
  res.send("Update reservations");
});
router.delete("/", (req, res) => {
  res.send("Delete reservations");
});

export default router;
