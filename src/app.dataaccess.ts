import { injectable } from 'inversify';
import * as mongoose from 'mongoose';

@injectable()
export class DataAccessResolver {

    async initialize(): Promise<void> {
        await mongoose.connect('mongodb://localhost/mtg', { useNewUrlParser: true, useUnifiedTopology: true });
    }
}
