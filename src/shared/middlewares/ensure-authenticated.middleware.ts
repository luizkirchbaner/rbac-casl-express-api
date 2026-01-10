// src/shared/middlewares/ensureAuthenticated.ts
import { UserService } from '@/features/users/user.service';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    response.status(401).json({ message: 'Nenhum token encontrado' });
    return;
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JwtPayload;


    const userService = new UserService();
    const user = await userService.findById(decoded.sub);

    if (!user) {
      response.status(401).json({ message: 'Usuário não encontrado' });
      return;
    }

    request.user = user;

    next();
  } catch {
    response.status(401).json({ message: 'Token inválido' });
  }
}
