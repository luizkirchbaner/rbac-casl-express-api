import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    response.status(401).json({ message: 'Nenhum token encontrado' });
    return;
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    request.user = {
      id: decoded.sub,
    };

    next();
  } catch {
    response.status(401).json({ message: 'Token inválido' });
  }
}
