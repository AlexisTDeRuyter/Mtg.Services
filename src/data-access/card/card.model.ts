import { Document, Model, model } from 'mongoose';
import { SchemaFactory } from '../../common/mongoose/schema.factory';

const cardSchema = SchemaFactory.create<ICardModel>({
    _id: String,
    name: String,
    oracle_text: String
});

export interface ICardModel extends Document {
    _id: string;
    name: string;
    oracle_text: string;
}

export const CardModel: Model<ICardModel> = model<ICardModel>('Card', cardSchema);
