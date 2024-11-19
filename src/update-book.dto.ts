import { IsBoolean, IsInt, IsOptional, IsString } from "class-validator";


export class UpdateBookDto {

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
  publishYear? : number;

  @IsOptional()
  @IsBoolean()
  reserved? : boolean;
}
