// In a real app, decode JWT token to verify role === 'admin'
export const adminOnly = (req, res, next) => {
  const isAdmin = true; // Replace with actual JWT logic later
  if (!isAdmin) {
    return res.status(403).json({ message: "Access denied. Admin only." });
  }
  next();
};
