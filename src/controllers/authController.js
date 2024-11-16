import authService from '../services/authService.js';

class AuthController {
  static async loginDoctor(req, res) {
    try {
      const { email, password } = req.body;
      const token = await authService.loginDoctor(email, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default AuthController;
