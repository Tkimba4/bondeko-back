import { Router } from "express";
import {
  addService,
  deleteService,
  getAllServices,
  getService,
  updateService,
} from "../controllers/servicesController";

const router = Router();

router.get("", getAllServices);
router.get(":id", getService);
router.post("", addService);
router.put("", updateService);
router.delete("", deleteService);
