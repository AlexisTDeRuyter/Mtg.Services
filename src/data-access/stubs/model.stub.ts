import { Schema, Document } from 'mongoose';
import * as mongoose from 'mongoose';

const stubSchema = new Schema({
    value: String
});

export interface IStubModel extends Document {
    value: string;
}

const StubModel = mongoose.model<IStubModel>('Stub', stubSchema);

export {
    StubModel
}
