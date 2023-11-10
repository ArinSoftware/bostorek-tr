import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .json({ message: 'Authorization header is missing!' });
  }

  const tokenParts = authHeader.split(' ');

  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).json({ message: 'Invalid auth header format!' });
  }

  const token = tokenParts[1];

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decodedToken.userId);

    next();
  } catch (error) {}
};

export { authenticateUser };
