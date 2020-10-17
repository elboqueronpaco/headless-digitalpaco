import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  username: string;

  @Field(type => String)
  email: string

  @Field(type => String)
  password: string
}