import { Document } from 'mongoose';
import { Status } from '../schemas/todo.schemas';

export interface Todo extends Document {
    readonly summary: string;
    readonly description: string;
    readonly status: Status;
}
