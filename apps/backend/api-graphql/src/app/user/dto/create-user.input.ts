import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString, IsEmpty, MaxLength, MinLength, IsEmail } from 'class-validator'
@InputType()
export class CreateUserInput {
  @IsString({message: 'Este campo usuario tiene ser String'})
  //@IsEmpty({message: 'Este campo usuario no puedo estar vacio'})
  @MinLength(8, { message: 'Este campo tiene que tener mas 8 letras' })
  @MaxLength(50, {message: 'Este campo no puede tener más de 50 letras'})
  @Field(type => String)
  username: string;

  @IsEmail()
  //@IsEmpty({message: 'Este campo email no puedo estar vacio'})
  @MaxLength(150, {message: 'Este campo no puede tener más de 150 letras'})
  @Field(type => String)
  email: string;

  @IsString({message: 'Este campo tiene ser String'})
  //@IsEmpty({message: 'Este campo contraseña no puedo estar vacio'})
  @MinLength(8, { message: 'Este campo tiene que tener mas 8 letras' })
  @MaxLength(20, {message: 'Este campo no puede tener más de 20 letras'})
  @Field(type => String)
  passwors: string;
  
}