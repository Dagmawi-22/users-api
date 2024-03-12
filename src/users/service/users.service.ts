import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto): Promise<User> {
    return User.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return User.findAll();
  }

  async findOne(id: number): Promise<User | null> {
    return User.findByPk(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return User.update(updateUserDto, { where: { id } });
  }

  async remove(id: number): Promise<number> {
    return User.destroy({ where: { id } });
  }
}
