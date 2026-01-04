import { Request, Response } from 'express';
import { z } from 'zod';
import { AuthService } from './auth.service';

const loginSchema = z.object({
  email: z.string().refine(
    value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    { message: 'Email inválido' }
  ),
  password: z.string().min(1)
});

export class AuthController {
  private readonly authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public async login(request: Request, response: Response): Promise<Response> {
    const parsed = loginSchema.safeParse(request.body);

    if (!parsed.success) {
      return response.status(400).json({
        message: 'Invalid input',
        errors: parsed.error.flatten().fieldErrors
      });
    }

    const result = await this.authService.login(parsed.data);

    return response.status(200).json(result);
  }
}
