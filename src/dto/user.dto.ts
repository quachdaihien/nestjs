import { MinLength, IsNumber, IsString, IsDateString } from 'class-validator';
export class UserDto {
  @MinLength(5, { message: 'min length: 5' })
  name?: string;
  @IsNumber()
  age: number;
  @IsString()
  sex: string;
  @IsDateString()
  dob: string;
  @IsString()
  address: string;
}
