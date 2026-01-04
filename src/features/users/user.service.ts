import { AppDataSource } from '@/core/database/data-source';
import { UserEntity } from '@/core/database/entities/UserEntity';
import { FindOptionsWhere, ILike } from 'typeorm';

interface getUsersInput {
  name?: string
};

interface getUsersResult {
  users: UserEntity[]
}

export class UserService {
  public async get(input: getUsersInput): Promise<getUsersResult> {
    const userRepository = AppDataSource.getRepository(UserEntity);
    const where: FindOptionsWhere<UserEntity> = {};

    if (input.name) {
      console.log(input)
      where.name = ILike(`%${input.name}%`);
    }

    const users = await userRepository.find({ where });

    return { users }
  }
}
