import { Document, Model } from 'mongoose';
import { Injectable } from 'container-ioc';

@Injectable()
export class DocumentFactory implements IDocumentFactory {
    create<T extends Document, U extends IModelable>(model: Model<T>, obj: U): T {
        return new model(Object.assign({ _id: obj.id }, obj));
    }
}

export interface IDocumentFactory {
    create: <T extends Document, U extends IModelable>(model: Model<T>, obj: U) => T;
}

export const TDocumentFactory = Symbol('IDocumentFactory');

export interface IModelable {
    id: string;
}
