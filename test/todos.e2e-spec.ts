import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { TodoService } from '../src/todo/services/todo.service';
import { TodoModule } from '../src/todo/todo.module';

describe('Todos', () => {
    let app: INestApplication;
    const todo = {
        id: '23232',
        summary: 'Task 1',
        description: 'Description 1',
    };

    const todoService = {
        create: () => [todo],
        findAll: () => [todo],
        find: () => [todo],
        update: () => [todo],
        delete: () => [todo],
    };

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [TodoModule],
        })
            .overrideProvider(TodoService)
            .useValue(todoService)
            .compile();

        app = module.createNestApplication();
        await app.init();
    });

    it(`/POST todos`, () => {
        return request(app.getHttpServer())
            .post('/todos')
            .expect(201)
            .expect(todoService.create());
    });

    it(`/GET todos`, () => {
        return request(app.getHttpServer())
            .get('/todos')
            .expect(200)
            .expect(todoService.findAll());
    });

    it(`/GET todo`, () => {
        return request(app.getHttpServer())
            .get('/todos/23232')
            .expect(200)
            .expect(todoService.find());
    });

    it(`/PUT todo`, () => {
        return request(app.getHttpServer())
            .put('/todos/23232')
            .expect(200)
            .expect(todoService.update());
    });

    it(`/DELETE todo`, () => {
        return request(app.getHttpServer())
            .delete('/todos/23232')
            .expect(200)
            .expect(todoService.update());
    });

    afterAll(async () => {
        await app.close();
    });
});
