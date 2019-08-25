import { IsBoolean, IsEnum, IsString, MaxLength, MinLength } from 'class-validator';
import { Status } from '../todo/schemas/todo.schemas';

export class TodoDto {
    @IsString()
    @MinLength(3, {
        message: 'summary is to short',
    })
    readonly summary: string;
    @IsString()
    @MinLength(3, {
        message: 'description is to short',
    })
    @MaxLength(500, {
        message: 'description is to long',
    })
    readonly description: string;
    @IsEnum(Status)
    readonly status = Status.INCOMPLETE;
}
