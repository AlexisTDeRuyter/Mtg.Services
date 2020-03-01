import { Document } from 'mongoose';
import { Injectable } from 'container-ioc';

@Injectable()
export class DatabaseAccessor implements IDatabaseAccessor {

    async save<T extends Document>(document: T): Promise<T> {
        return document.save();
    }
}

export interface IDatabaseAccessor {
    save: <T extends Document>(document: T) => Promise<T>;
}

export const TDatabaseAccessor = Symbol('IDatabaseAccessor');
