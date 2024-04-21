import express from "express";
import { getDataFromMongoDB } from "../utils/db.cjs";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await getDataFromMongoDB();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    });

export default router;