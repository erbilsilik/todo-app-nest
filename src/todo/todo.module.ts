import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { todoProviders } from './todo.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [TodoController],
    providers: [TodoService, ...todoProviders],
})
export class TodoModule {}
