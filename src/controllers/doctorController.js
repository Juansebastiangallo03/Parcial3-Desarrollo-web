import doctorService from '../services/doctorService.js';

class DoctorController {
  static async getAppointments(req, res) {
    try {
      const { date } = req.query;
      const doctorId = req.user.id;
      const appointments = await doctorService.getAppointments(doctorId, date);
      res.status(200).json(appointments);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async createAppointment(req, res) {
    try {
      const doctorId = req.user.id;
      const { patientId, date, hour } = req.body;
      const appointment = await doctorService.createAppointment(doctorId, patientId, date, hour);
      res.status(201).json(appointment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateAppointment(req, res) {
    try {
      const doctorId = req.user.id;
      const { appointmentId } = req.params;
      const { patientId, date, hour } = req.body;
      const updatedAppointment = await doctorService.updateAppointment(doctorId, appointmentId, patientId, date, hour);
      res.status(200).json(updatedAppointment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteAppointment(req, res) {
    try {
      const doctorId = req.user.id;
      const { appointmentId } = req.params;
      await doctorService.deleteAppointment(doctorId, appointmentId);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default DoctorController;
