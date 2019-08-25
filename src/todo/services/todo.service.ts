import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Todo } from '../interfaces/todo.interface';
import { TodoDto } from '../../dto/todo.dto';

@Injectable()
export class TodoService {

    constructor(@Inject('TODO_MODEL') private readonly todoModel: Model<Todo>) {}

    async create(todoDto: TodoDto): Promise<Todo> {
        const createdTodo = new this.todoModel(todoDto);
        return await createdTodo.save();
    }

    async findAll(query: any = ''): Promise<Todo[]> {
        const limit = query.limit && query.limit <= 100 ? parseInt(query.limit, 10) : 10;
        let page = 0;
        if (query) {
            if (query.page) {
                query.page = parseInt(query.page, 10);
                page = Number.isInteger(query.page) ? query.page : 0;
            }
        }

        return this.todoModel.find()
            .sort('-createdAt')
            .limit(limit)
            .skip(limit * page)
            .exec();
    }

    async find(id: string): Promise<Todo[]> {
        return await this.todoModel.findById(id).exec();
    }

    async update(id: string, todoDto: TodoDto): Promise<Todo> {
        return await this.todoModel.findByIdAndUpdate(id, todoDto, {new: true});
    }

    async delete(id: string): Promise<Todo> {
        return await this.todoModel.findByIdAndRemove(id);
    }
}
