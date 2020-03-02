import { DocumentFactory } from './document.factory';
import { Model } from 'mongoose';
import { CardModel, ICardModel } from '../../data-access/card/card.model';
import { Card } from '../../domain/card';
import { CardStub } from '../../domain/stubs/card.stub';

describe('DocumentFactory Tests', () => {

    const sut: DocumentFactory = new DocumentFactory();

    const expectedModel: Model<ICardModel> = CardModel,
          expectedObj: Card = new CardStub({});

    describe('When create is called', () => {

        let createdDocument: ICardModel;

        beforeEach(() => {
            createdDocument = sut.create<ICardModel, Card>(expectedModel, expectedObj);
        });

        it('creates the model with the _id property set to the id property', () => {
            expect(createdDocument).toBeDefined();
            expect(createdDocument._id).toEqual(expectedObj.id);
            expect(createdDocument.name).toEqual(expectedObj.name);
        });
    });
});
