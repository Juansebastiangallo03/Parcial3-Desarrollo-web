import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();

router.post('/doctor/login', authController.loginDoctor);

export default router;
