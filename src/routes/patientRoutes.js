import express from 'express';
import patientController from '../controllers/patientController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Middleware para proteger las rutas con JWT
router.use(authMiddleware.verifyToken);

// Endpoints para el paciente
router.get('/:patientId', patientController.getPatientById);
router.get('/:patientId/appointment', patientController.getPatientAppointments);

export default router;
