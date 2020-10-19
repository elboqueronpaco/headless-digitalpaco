import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepositori: Repository<User>
  ) {

  }
  /**
   * 
   * @param dto 
   *
   */
  async createUser(dto: CreateUserInput) {
    // const username and email of dto
    const { username, email } = dto
    // if username exist
    const usernameExist = await this.userRepositori.findOne({ username })
    if (usernameExist) throw new Error('El usuario ya existe')

    // if email exist
    const emailExist = await this.userRepositori.findOne({ email })
    if (emailExist) throw new Error('El correo electronico ya existe ')
    //create newUser
    const newUser = this.userRepositori.create(dto)
    // save the newUser
    const data = await this.userRepositori.save(newUser)
    return {
      message: `${username} ha sido creado con exito`,
      data
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
