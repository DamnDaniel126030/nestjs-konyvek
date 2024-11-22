import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsBoolean, IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {


  @IsOptional()
  @IsString()
  title? : string;

  @IsOptional()
  @IsString()
  author? : string;
  
  @IsOptional()
  @IsString()
  isbn? : string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  publishYear? : number;

  @IsOptional()
  @IsBoolean()
  reserved? : boolean;
}
