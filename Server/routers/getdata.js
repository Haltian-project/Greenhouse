import express from 'express';
import { getDataFromMongoDB } from '../utils/db.cjs';

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const latestData = await getDataFromMongoDB();
    res.json(latestData);
  } catch (error) {
    console.error('Error fetching latest data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> daca3c4cdea2d6f2f77afb4769d86ac67fe00f17
