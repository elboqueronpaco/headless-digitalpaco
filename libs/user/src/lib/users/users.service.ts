import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserEntity } from 'libs/database/src/lib/user/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}
  async create(dto: CreateUserInput) {
    const { username, email } = dto
    const usernameExist = await this.userRepository.findOne({ username })
    const emailExist = await this.userRepository.findOne({ email })
    //el username es unico 
    if (usernameExist) throw new BadRequestException(`${username} ya existe`)
    //el email es unico
    if (emailExist) throw new BadRequestException(`${email} ya existe`)
    //crear el usuario
    const userNew = this.userRepository.create(dto)
    try {
      const data = await this.userRepository.save(userNew)
      return {
        message: 'Usuario creado correctamente',
        data
      }
    } catch (error) {
      throw new BadRequestException('No se pudo Registrar el usuario')
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  /*
  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }
  */

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
