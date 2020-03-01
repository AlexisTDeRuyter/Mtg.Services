import * as mongoose from 'mongoose';
import { Injectable } from 'container-ioc';

@Injectable()
export class DataAccessFactory implements IDataAccessFactory {

    async connect(): Promise<void> {
        await mongoose.connect('mongodb://localhost/mtg', { useNewUrlParser: true, useUnifiedTopology: true });
    }
}

export interface IDataAccessFactory {
    connect: () => Promise<void>;
}

export const TDataAccessFactory = Symbol('IDataAccessFactory');
