import { ObjectType, Field, Int } from '@nestjs/graphql';
import { hash } from 'bcryptjs';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import { RolesEnum } from '../enums/roles.enum';

@Entity('users')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number
  @Field(type => String)
  @Column({ type: 'varchar', length: 50, nullable: false, unique: true})
  username: string
  @Field(type => String)  
  @Column({ type: 'varchar', length: 150, nullable: false, unique: true })
  email: string

  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string

  @Field(type => RolesEnum)
  @Column({ type: 'enum', enum: RolesEnum, default: RolesEnum.USER })
  role: RolesEnum

  @Field(type => Boolean)
  @Column({ type: 'bool', default: true })
  active: boolean

  @Field(type => Date)
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.password) return
    this.password = await hash(this.password, 15)
  }
}
