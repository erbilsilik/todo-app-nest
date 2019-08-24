import { Connection } from 'mongoose';
import { TodoSchema } from '../schemas/todo.schemas';

export const todoProviders = [
    {
        provide: 'TODO_MODEL',
        useFactory: (connection: Connection) => connection.model('Todo', TodoSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
