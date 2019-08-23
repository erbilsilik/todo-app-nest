import { Document } from 'mongoose';
import { Status } from '../schemas/todo.schemas';

export interface Todo extends Document {
    readonly title: string;
    readonly status: Status;
}
