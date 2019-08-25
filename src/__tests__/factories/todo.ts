import { Status } from '../../todo/schemas/todo.schemas';

export class TodoFactory {
    summary: 'Task';
    description: 'Description';
    status: Status.INCOMPLETE;

    public static build(opts: any = {}) {
        return new TodoFactory(opts);
    }

    public static buildList(length: number, opts: any = {}) {
        return Array.apply(null, { length }).map(() => this.build(opts));
    }

    constructor(opts: any = {}) {
        Object.assign(this, opts);
    }
}
