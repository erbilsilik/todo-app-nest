import { Test } from '@nestjs/testing';
import { TodoController } from '../../../src/todo/controllers/todo.controller';
import { TodoService } from '../../../src/todo/services/todo.service';
import { Todo } from '../../../src/todo/interfaces/todo.interface';
import { Status } from '../../../src/todo/schemas/todo.schemas';

describe('TodoController', () => {
    let todoController: TodoController;
    let todoService: TodoService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [
                TodoController,
            ],
            providers: [
                TodoService,
            ],
        }).compile();

        todoService = module.get<TodoService>(TodoService);
        todoController = module.get<TodoController>(TodoController);
    });

    describe('findAll', () => {
        it('should return an array of todos', async () => {
            const todos: Todo[] = [
                {
                    title: 'Task1',
                    status: Status.INCOMPLETE,
                },
                {
                    title: 'Task2',
                    status: Status.COMPLETED,
                },
            ];
            jest.spyOn(todoService, 'findAll').mockImplementation((): any => todos);

            expect(await todoController.findAll()).toBe(todos);
        });
    });
});
