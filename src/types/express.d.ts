import { UserEntity } from '@/core/database/entities';
import 'express';

declare global {
  namespace Express {
    interface Request {
      user?: UserEntity;
    }
  }
}
