import { CardAccessor } from './card.accessor';
import { IDatabaseAccessor } from '../database.accessor';
import { MockDatabaseAccessor } from '../database.accessor.mock';
import { Card } from '../../domain/card';
import { CardStub } from '../../domain/stubs/card.stub';
import { ICardModel } from './card.model';
import Mock = jest.Mock;

describe('CardAccessor Tests', () => {

    let sut: CardAccessor;

    let mockDataAccess: IDatabaseAccessor = new MockDatabaseAccessor();

    let expectedCard: Card = new CardStub({});

    beforeEach(() => {
        sut = new CardAccessor(mockDataAccess as IDatabaseAccessor);
    });

    describe('When save is called', () => {

        beforeEach(() => {
            sut.save(expectedCard);
        });

        it('saves the card', () => {
            const calledWithCard: ICardModel = (<Mock>mockDataAccess.save).mock.calls.pop()!.pop() as ICardModel;
            expect(calledWithCard!.name).toEqual(expectedCard.name);
            expect(calledWithCard!.oracle_text).toEqual(expectedCard.oracle_text);
        });
    });
});
