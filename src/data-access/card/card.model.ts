import { Schema, Document } from 'mongoose';
import * as mongoose from 'mongoose';

const cardSchema = new Schema({
    name: String,
    oracle_text: String
});

export interface ICardModel extends Document {
    name: string;
    oracle_text: string;
}

const CardModel = mongoose.model<ICardModel>('Card', cardSchema);

export {
    CardModel
};
