import 'reflect-metadata';
import { CardService } from './card.service';
import { MockRestApiAccessor } from '../../data-access/rest-api-accessor.mock';
import { MockCardDataAccess } from '../../data-access/card/card.accessor.mock';
import { Card } from '../../domain/card';
import { CardStub } from '../../domain/stubs/card.stub';

describe('CardService Tests', () => {

    let sut: CardService;

    let mockRestApiAccessor: MockRestApiAccessor,
        mockCardDataAccess: MockCardDataAccess;

    let expectedCard: Card;

    beforeEach(() => {
        mockRestApiAccessor = new MockRestApiAccessor();
        mockCardDataAccess = new MockCardDataAccess();
        expectedCard = new CardStub({});
        sut = new CardService(mockRestApiAccessor, mockCardDataAccess as any);
    });

    describe('When getRandomCard is called', async () => {

        let result: Card;

        beforeEach(async () => {
            const cardProm = sut.getRandomCard();
            mockRestApiAccessor.get.resolve(expectedCard);
            mockCardDataAccess.save.resolve();
            result = await cardProm;
        });

        it('gets the card from scryfall', () => {
            expect(mockRestApiAccessor.get).toHaveBeenCalledWith('https://api.scryfall.com/cards/random');
        });

        it('saves the card', () => {
            expect(mockCardDataAccess.save).toHaveBeenCalledWith(expectedCard);
        });

        it('returns the retrieved card', () => {
            expect(result).toBe(expectedCard);
            expect(false).toBe(true);
        });
    });
});
