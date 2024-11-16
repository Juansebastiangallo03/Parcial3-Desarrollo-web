import express from 'express';
import doctorController from '../controllers/doctorController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Middleware para proteger las rutas con JWT
router.use(authMiddleware.verifyToken);

// Endpoints para el doctor
router.get('/appointment', doctorController.getAppointments);
router.post('/appointment', doctorController.createAppointment);
router.put('/appointment/:appointmentId', doctorController.updateAppointment);
router.delete('/appointment/:appointmentId', doctorController.deleteAppointment);

export default router;
