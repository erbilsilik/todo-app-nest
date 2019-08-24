import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Query,
    Header, HttpStatus, Res, HttpCode,
} from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { TodoDto } from '../../dto/todo.dto';
import { Todo } from '../interfaces/todo.interface';

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Post()
    async create(@Body() todoDto: TodoDto) {
        return {
            data: await this.todoService.create(todoDto),
            statusCode: HttpStatus.CREATED,
        };
    }

    @Get()
    async findAll(@Query() query: string): Promise<any> {
        return {
            data: await this.todoService.findAll(query),
            statusCode: HttpStatus.OK,
        };
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return {
            data: await this.todoService.find(id),
            statusCode: HttpStatus.OK,
        };
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() todoDto: TodoDto) {
        return {
            data: await this.todoService.update(id, todoDto),
            statusCode: HttpStatus.OK,
        };
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return {
            data: await this.todoService.delete(id),
            statusCode: HttpStatus.OK,
        };
    }
}
