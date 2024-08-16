import express from 'express';
const router = express.Router();
import { registerUser, authUser, getUserProfile } from '../controllers/authController.js';
import { protect, admin, streamer } from '../middlewares/authMiddleware.js';

router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);

export default router;
