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
        return await this.todoService.create(todoDto);
    }

    @Get()
    async findAll(@Query() query: string): Promise<Todo[]> {
        return await this.todoService.findAll(query);
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.todoService.find(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() todoDto: TodoDto) {
        return await this.todoService.update(id, todoDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.todoService.delete(id);
    }
}
