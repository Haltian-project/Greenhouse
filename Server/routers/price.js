<<<<<<< HEAD

=======
>>>>>>> daca3c4cdea2d6f2f77afb4769d86ac67fe00f17
import express from "express";
import { getPrice } from "../controllers/price.js";
const router = express.Router();

router.get("/", getPrice);

export default router;