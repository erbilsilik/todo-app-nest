import * as mongoose from 'mongoose';

export enum Status {
    INCOMPLETE = 'Incomplete',
    COMPLETED = 'Completed',
}

export const TodoSchema = new mongoose.Schema({
    summary: {type: String, required: true, min: [3]},
    description: {type: String, required: true, min: [20], max: [500]},
    status: { type: Status, default: Status.INCOMPLETE },
}, {
    timestamps: true,
});
