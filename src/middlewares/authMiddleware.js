import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt.js';

class AuthMiddleware {
  static verifyToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      return res.status(403).json({ error: 'Token is required' });
    }

    jwt.verify(token, jwtConfig.secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      req.user = decoded;
      next();
    });
  }
}

export default AuthMiddleware;
