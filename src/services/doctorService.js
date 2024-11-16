import pool from '../config/db.js';

class DoctorService {
  static async getAppointments(doctorId, date) {
    let query = 'SELECT * FROM medicalappointment WHERE doctor_id = $1';
    const params = [doctorId];

    if (date) {
      query += ' AND date = $2';
      params.push(date);
    }

    const { rows } = await pool.query(query, params);
    return rows;
  }

  static async createAppointment(doctorId, patientId, date, hour) {
    const query = `
      INSERT INTO medicalappointment (doctor_id, patient_id, date, hour)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const { rows } = await pool.query(query, [doctorId, patientId, date, hour]);
    return rows[0];
  }

  static async updateAppointment(doctorId, appointmentId, patientId, date, hour) {
    const query = `
      UPDATE medicalappointment
      SET patient_id = $1, date = $2, hour = $3
      WHERE id = $4 AND doctor_id = $5
      RETURNING *;
    `;
    const { rows } = await pool.query(query, [patientId, date, hour, appointmentId, doctorId]);
    return rows[0];
  }

  static async deleteAppointment(doctorId, appointmentId) {
    const query = `
      DELETE FROM medicalappointment
      WHERE id = $1 AND doctor_id = $2;
    `;
    await pool.query(query, [appointmentId, doctorId]);
  }
}

export default DoctorService;
