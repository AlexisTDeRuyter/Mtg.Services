import { Document, Model } from "mongoose";
import { IModelable } from './card.model';

export class DocumentFactory {
    static create<T extends Document, U extends IModelable>(_model: Model<T>, obj: U): T {
        return new _model(Object.assign({ _id: obj.id }, obj));
    }
}
