import pool from '../config/db.js';

class Doctor {
  static async findById(id) {
    const query = 'SELECT * FROM doctor WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }

  static async findByEmail(email) {
    const query = 'SELECT * FROM doctor WHERE email = $1';
    const { rows } = await pool.query(query, [email]);
    return rows[0];
  }
}

export default Doctor;
