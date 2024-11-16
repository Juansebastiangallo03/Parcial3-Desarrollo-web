import pool from '../config/db.js';

class Specialty {
  // Obtener todas las especialidades
  static async findAll() {
    const query = 'SELECT * FROM specialty';
    const { rows } = await pool.query(query);
    return rows;
  }

  // Buscar una especialidad por ID
  static async findById(id) {
    const query = 'SELECT * FROM specialty WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }

  // Crear una nueva especialidad
  static async create(name) {
    const query = `
      INSERT INTO specialty (name)
      VALUES ($1)
      RETURNING *;
    `;
    const { rows } = await pool.query(query, [name]);
    return rows[0];
  }
}

export default Specialty;
