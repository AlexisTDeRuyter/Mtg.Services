import { Schema, SchemaDefinition } from 'mongoose';

export class SchemaFactory {
    static create<T>(definition?: SchemaDefinition): Schema<T> {
        return new Schema<T>(definition, { timestamps: true });
    }
}
