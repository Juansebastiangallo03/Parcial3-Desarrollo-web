import { body, param, query } from 'express-validator';

const validationMiddleware = {
  validateAppointmentCreation: [
    body('patientId').isInt().withMessage('Patient ID must be an integer'),
    body('date').isDate({ format: 'YYYY-MM-DD' }).withMessage('Date must be in YYYY-MM-DD format'),
    body('hour').matches(/^([01]\d|2[0-3]):([0-5]\d)$/).withMessage('Hour must be in HH:MM format'),
  ],

  validatePatientId: [
    param('patientId').isInt().withMessage('Patient ID must be an integer'),
  ],

  validateDateQuery: [
    query('date').optional().isDate({ format: 'YYYY-MM-DD' }).withMessage('Date must be in YYYY-MM-DD format'),
  ],

  validateAppointmentId: [
    param('appointmentId').isInt().withMessage('Appointment ID must be an integer'),
  ],
};

export default validationMiddleware;
