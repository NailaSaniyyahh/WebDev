import express from "express";
import { getActors } from "../controllers/actors.controller.js";

const router = express.Router();

router.get("/actors", getActors); // GET request for fetching all actors

export default router;
