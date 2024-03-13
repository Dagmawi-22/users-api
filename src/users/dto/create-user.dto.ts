import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
  // Define user input on creating a user with validations
  @ApiProperty()
  @IsString({ message: 'Name must be a string' })
  readonly name: string;

  @ApiProperty()
  @IsString({ message: 'Email must be a string' })
  @IsEmail({}, { message: 'Invalid email format' })
  readonly email: string;

  @ApiProperty()
  @IsPhoneNumber(undefined, { message: 'Invalid phone number format' })
  readonly phone: string;
}
