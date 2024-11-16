import pool from '../config/db.js';

class MedicalAppointment {
  static async findByDoctorAndDate(doctorId, date) {
    const query = 'SELECT * FROM medicalappointment WHERE doctor_id = $1 AND date = $2';
    const { rows } = await pool.query(query, [doctorId, date]);
    return rows;
  }

  static async findByPatientAndDate(patientId, date) {
    const query = 'SELECT * FROM medicalappointment WHERE patient_id = $1 AND date = $2';
    const { rows } = await pool.query(query, [patientId, date]);
    return rows;
  }

  static async create(doctorId, patientId, date, hour) {
    const query = `
      INSERT INTO medicalappointment (doctor_id, patient_id, date, hour)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const { rows } = await pool.query(query, [doctorId, patientId, date, hour]);
    return rows[0];
  }

  static async update(appointmentId, patientId, date, hour) {
    const query = `
      UPDATE medicalappointment
      SET patient_id = $1, date = $2, hour = $3
      WHERE id = $4
      RETURNING *;
    `;
    const { rows } = await pool.query(query, [patientId, date, hour, appointmentId]);
    return rows[0];
  }

  static async delete(appointmentId) {
    const query = 'DELETE FROM medicalappointment WHERE id = $1';
    await pool.query(query, [appointmentId]);
  }
}

export default MedicalAppointment;
