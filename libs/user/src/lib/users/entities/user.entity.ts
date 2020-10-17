import { ObjectType, Field, Int } from '@nestjs/graphql';
import { RolesEnum } from '../enums/roles.enum';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;
  
  @Field( type => String)
  username: string

  @Field(type => String)
  email: string

  @Field(type => RolesEnum)
  role: RolesEnum

  @Field(type => Boolean)
  active: boolean

  @Field(type => Date)
  createdAt: Date
  
}
