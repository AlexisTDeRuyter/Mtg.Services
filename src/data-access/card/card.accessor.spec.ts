import { CardAccessor } from './card.accessor';
import { IDatabaseAccessor } from '../database.accessor';
import { MockDatabaseAccessor } from '../database.accessor.mock';
import { Card } from '../../domain/card';
import { CardStub } from '../../domain/stubs/card.stub';
import { CardModel } from './card.model';
import Mock = jest.Mock;
import { IDocumentFactory } from '../../common/mongoose/document.factory';
import { MockDocumentFactory } from '../../common/mongoose/document.factory.mock';

describe('CardAccessor Tests', () => {

    let sut: CardAccessor;

    const mockDataAccess: IDatabaseAccessor = new MockDatabaseAccessor(),
          mockDocumentFactory: IDocumentFactory = new MockDocumentFactory();

    const expectedCard: Card = new CardStub({}),
          expectedCardDocument = { _id: expectedCard.id, name: expectedCard.name };

    beforeEach(() => {
        (mockDocumentFactory.create as Mock).mockReturnValue(expectedCardDocument);
        sut = new CardAccessor(mockDataAccess, mockDocumentFactory);
    });

    describe('When save is called', () => {

        beforeEach(() => {
            sut.save(expectedCard);
        });

        it('saves the card', () => {
            expect(mockDocumentFactory.create).toHaveBeenCalledWith(CardModel, expectedCard);
            expect(mockDataAccess.save).toHaveBeenCalledWith(expectedCardDocument);
        });
    });
});
