import { Request, Response } from 'express'
import { UserService } from './user.service';
import z from 'zod';

const getUsersSchema = z.object({
  name: z.string().min(3, { message: "O nome deve conter pelo menos 3 caracteres" }).optional()
})

export class UserController {
  private readonly userService: UserService

  constructor() {
    this.userService = new UserService()
  }

  public async get(request: Request, response: Response): Promise<Response> {
    const parsed = getUsersSchema.safeParse(request.query)

    if (!parsed.success) {
      return response.status(400).json({
        message: 'Invalid input',
        errors: parsed.error.flatten().fieldErrors
      })
    }

    const result = await this.userService.get(parsed.data);

    return response.status(200).json(result);
  }
}
