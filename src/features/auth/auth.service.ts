import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '@/core/database/data-source';
import { UserEntity } from '@/core/database/entities/UserEntity';

interface LoginInput {
  email: string
  password: string
}

interface LoginResult {
  accessToken: string
}

export class AuthService {
  public async login(input: LoginInput): Promise<LoginResult> {
    const userRepository = AppDataSource.getRepository(UserEntity);

    const user = await userRepository.findOne({
      where: { email: input.email }
    });

    if (!user) {
      throw new Error('Credenciais inválidas');
    }

    const passwordMatches = await bcrypt.compare(
      input.password,
      user.password
    );

    if (!passwordMatches) {
      throw new Error('Credenciais inválidas');
    }

    const accessToken = jwt.sign(
      { sub: user.id },
      process.env.JWT_SECRET as string,
      { expiresIn: '24h' }
    );

    return { accessToken };
  }
}
