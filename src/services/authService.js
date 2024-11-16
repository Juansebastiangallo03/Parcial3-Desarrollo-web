import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../config/db.js';
import jwtConfig from '../config/jwt.js';

class AuthService {
  static async loginDoctor(email, password) {
    const query = 'SELECT * FROM doctor WHERE email = $1';
    const { rows } = await pool.query(query, [email]);

    if (rows.length === 0 || !await bcrypt.compare(password, rows[0].password)) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: rows[0].id }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
    return token;
  }
}

export default AuthService;
