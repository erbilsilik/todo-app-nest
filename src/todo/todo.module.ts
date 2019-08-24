import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TodoController } from './controllers/todo.controller';
import { TodoService } from './services/todo.service';
import { todoProviders } from './providers/todo.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [TodoController],
    providers: [TodoService, ...todoProviders],
})
export class TodoModule {}
