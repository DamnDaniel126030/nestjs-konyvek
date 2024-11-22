import { IsBoolean, IsISBN, IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreateBookDto {

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  @IsISBN()
  isbn: string;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  publishYear: number;

  @IsBoolean()
  reserved: boolean;
}
