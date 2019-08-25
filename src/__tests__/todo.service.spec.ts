import { TodoService } from '../todo/services/todo.service';
import { Test, TestingModule } from '@nestjs/testing';
import { TodoFactory } from './factories/todo';
jest.mock('../todo/services/todo.service');

describe('TodoService', () => {
    let todoService: TodoService;
    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TodoService,
            ],
        }).compile();
        todoService = module.get(TodoService);
    });

    it('should add todos to API', async () => {
        const todo = TodoFactory.build();
        jest.spyOn(todoService, 'create').mockResolvedValue(todo);
        expect(await todoService.create(TodoFactory.build())).toEqual(todo);
    });

    it('should respond todos', async () => {
        const todos = TodoFactory.buildList(10);
        jest.spyOn(todoService, 'findAll').mockResolvedValue(todos);
        expect(await todoService.findAll()).toEqual(todos);
    });

    it('should respond todo', async () => {
        const todo = TodoFactory.buildList(1);
        jest.spyOn(todoService, 'find').mockResolvedValue(todo);
        expect(await todoService.find(todo._id)).toEqual(todo);
    });

    it('should update todo', async () => {
        const todo = TodoFactory.buildList(1);
        jest.spyOn(todoService, 'update').mockResolvedValue(todo);
        expect(await todoService.update(todo._id, todo)).toEqual(todo);
    });

    it('should delete todo', async () => {
        const todo = TodoFactory.buildList(1);
        jest.spyOn(todoService, 'delete').mockResolvedValue(todo);
        expect(await todoService.delete(todo._id)).toEqual(todo);
    });
});
