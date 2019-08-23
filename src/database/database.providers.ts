import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect('mongodb+srv://todo:123reklamlar@cluster0-bdmth.mongodb.net/test?retryWrites=true&w=majority\n', { useNewUrlParser: true, useFindAndModify: false }),
    },
];
