import { SchemaFactory } from './schema.factory';
import * as mongoose from 'mongoose';
describe('SchemaFactory Tests', () => {

    const expectedType = {};

    describe('When create is called', () => {

        beforeEach(() => {
            spyOn(mongoose, 'Schema');
            SchemaFactory.create(expectedType);
        });

        it('creates the Schema with timestamps set to true', () => {
            expect(mongoose.Schema).toHaveBeenCalledWith(expectedType, { timestamps: true });
        });
    });
});
