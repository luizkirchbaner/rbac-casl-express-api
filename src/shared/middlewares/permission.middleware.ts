import { Request, Response, NextFunction } from 'express';
import { Action, Subject, buildAbility } from '../casl/ability.factory';

export function permissionMiddleware(action: Action, subject: Subject) {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.userRule) {
      res.sendStatus(401);
      return;
    }

    const ability = buildAbility(req.userRule);

    if (!ability.can(action, subject)) {
      res.status(403).json({ message: 'Você não tem permissão para realizar esta ação.' });
      return;
    }

    next();
  };
}
