import { IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreateBookDto {

  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  author: string

  @IsInt()
  @IsPositive()
  publishYear: number
}
