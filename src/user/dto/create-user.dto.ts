import { IsEmail, IsNumber, IsString, isNumber } from "class-validator";

export class CreateUserDto {
    @IsString()
    Name:string
    @IsEmail()
    Email:string
    @IsNumber()
    Age:number
}
