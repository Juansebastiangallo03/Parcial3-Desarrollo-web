import pool from '../config/db.js';

class PatientService {
  static async getPatientById(patientId) {
    const query = 'SELECT * FROM patient WHERE id = $1';
    const { rows } = await pool.query(query, [patientId]);
    return rows[0];
  }

  static async getPatientAppointments(patientId) {
    const query = 'SELECT * FROM medicalappointment WHERE patient_id = $1';
    const { rows } = await pool.query(query, [patientId]);
    return rows;
  }
}

export default PatientService;
