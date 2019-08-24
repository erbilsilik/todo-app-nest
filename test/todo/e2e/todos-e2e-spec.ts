import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { TodoModule } from '../../../src/todo/todo.module';
import { TodoService } from '../../../src/todo/services/todo.service';
import { Status } from '../../../src/todo/schemas/todo.schemas';

describe('Todos', () => {
    let app: INestApplication;
    const todoService = { findAll: () => [{title: 'Task1', status: Status.INCOMPLETE}]};

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [
                TodoModule,
            ],
        })
            .overrideProvider(TodoService)
            .useValue(todoService)
            .compile();

        app = module.createNestApplication();
        await app.init();
    });

    it(`/GET todos`, () => {
        return request(app.getHttpServer())
            .get('/todos')
            .expect(200)
            .expect({
                data: todoService.findAll(),
            });
    });

    afterAll(async () => {
        await app.close();
    });
});
