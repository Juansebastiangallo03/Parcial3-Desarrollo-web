class RoleMiddleware {
    static checkDoctorRole(req, res, next) {
      if (req.user && req.user.role === 'doctor') {
        return next();
      }
      return res.status(403).json({ message: 'Access denied: Doctor role required.' });
    }
  }
  
  export default RoleMiddleware;
  