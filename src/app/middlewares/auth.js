import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      message: 'Token is not provider',
    });
  }
  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secretToken);
    console.log(decoded);
    return next();
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid Token',
    });
  }
};
