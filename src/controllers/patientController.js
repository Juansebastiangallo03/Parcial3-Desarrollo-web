import patientService from '../services/patientService.js';

class PatientController {
  static async getPatientById(req, res) {
    try {
      const { patientId } = req.params;
      const patient = await patientService.getPatientById(patientId);
      res.status(200).json(patient);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getPatientAppointments(req, res) {
    try {
      const { patientId } = req.params;
      const appointments = await patientService.getPatientAppointments(patientId);
      res.status(200).json(appointments);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default PatientController;
