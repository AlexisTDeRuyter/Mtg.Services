import { injectable } from 'inversify';
import { Document } from 'mongoose';

@injectable()
export class DatabaseAccessor {

    async save<T extends Document>(document: T): Promise<T> {
        return document.save();
    }
}
