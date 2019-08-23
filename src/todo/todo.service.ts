import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Todo } from './interfaces/todo.interface';
import { TodoDto } from '../dto/todo.dto';

@Injectable()
export class TodoService {

    constructor(@Inject('TODO_MODEL') private readonly todoModel: Model<Todo>) {}

    async create(todoDto: TodoDto): Promise<Todo> {
        const createdArticle = new this.todoModel(todoDto);
        return await createdArticle.save();
    }

    async findAll(): Promise<Todo[]> {
        return await this.todoModel.find().exec();
    }

    async find(id: string): Promise<Todo[]> {
        return await this.todoModel.findById(id).exec();
    }

    async update(id: string, todoDto: TodoDto): Promise<Todo> {
        return await this.todoModel.findByIdAndUpdate(id, todoDto);
    }

    async delete(id: string, todoDto: TodoDto): Promise<Todo> {
        return await this.todoModel.findByIdAndRemove(id);
    }
}
