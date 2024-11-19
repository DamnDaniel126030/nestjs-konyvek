import { IsBoolean, IsInt, IsISBN, IsNotEmpty, IsString, } from "class-validator";

export class BookDto{

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
  publishYear: number;

  @IsBoolean()
  reserved: boolean;

}
