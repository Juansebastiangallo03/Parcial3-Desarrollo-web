import pool from '../config/db.js';

class Patient {
  static async findById(id) {
    const query = 'SELECT * FROM patient WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }
}

export default Patient;
