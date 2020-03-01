import 'jest';
import { CardService } from './card.service';
import { Card } from '../../domain/card';
import { CardStub } from '../../domain/stubs/card.stub';
import { MockRestApiAccessor } from '../../data-access/rest-api-accessor.mock';
import { PromiseMock } from '../../test/custom-spy';
import { MockCardAccessor } from '../../data-access/card/card.accessor.mock';
import { IRestApiAccessor } from '../../data-access/rest-api-accessor';
import { ICardAccessor } from '../../data-access/card/card.accessor';

describe('CardService Tests', () => {

    let sut: CardService;

    let mockRestApiAccessor: IRestApiAccessor = new MockRestApiAccessor(),
        mockCardDataAccess: ICardAccessor = new MockCardAccessor();

    const expectedCard: Card = new CardStub({});

    beforeEach(() => {
        sut = new CardService(mockRestApiAccessor, mockCardDataAccess);
    });

    describe('When getRandomCard is called', () => {

        let result: Card;

        beforeEach(async () => {
            const cardProm = sut.getRandomCard();
            (<PromiseMock<Card>>mockRestApiAccessor.get).resolve(expectedCard);
            (<PromiseMock<void>>mockCardDataAccess.save).resolve();
            result = await cardProm;
        });

        it('gets the card from scryfall', () => {
            expect(mockRestApiAccessor.get).toHaveBeenCalledWith('https://api.scryfall.com/cards/random');
        });

        it('saves the card', () => {
            expect(mockCardDataAccess.save).toHaveBeenCalledWith(expectedCard);
        });

        it('returns the retrieved card', () => {
            expect(result).toEqual(expectedCard);
        });
    });
});
