import express from "express";
import {
  addHouse,
  deleteHouse,
  getData,
  getHouse,
  updateHouse,
} from "./controllers.js";

const router = express.Router();

router.get("/", getData);

router.get("/:id", getHouse);

router.post("/", addHouse);

router.put("/:id", updateHouse);

router.delete("/:id", deleteHouse);

export default router;
