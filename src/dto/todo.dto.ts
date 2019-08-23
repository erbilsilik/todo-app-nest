import { IsBoolean, IsEnum, IsString, MinLength } from 'class-validator';
import { Status } from '../todo/schemas/todo.schemas';

export class TodoDto {
    @IsString()
    @MinLength(3, {
        message: 'title is to short',
    })
    readonly title: string;
    @IsEnum(Status)
    readonly status = Status.INCOMPLETE;
}
