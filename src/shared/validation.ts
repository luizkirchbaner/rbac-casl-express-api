import { ZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';

export function validate(schema: ZodObject<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params
    });

    if (!result.success) {
      return res.status(400).json({
        errors: result.error.format()
      });
    }

    req.body = result.data.body;
    next();
  };
}
