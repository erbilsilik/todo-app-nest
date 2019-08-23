import * as mongoose from 'mongoose';

export enum Status {
    INCOMPLETE = 'incomplete',
    COMPLETED = 'completed',
}

export const TodoSchema = new mongoose.Schema({
    title: { type: String, required: true, min: [3] },
    status: { type: Status, default: Status.INCOMPLETE },
}, {
    timestamps: true,
});
