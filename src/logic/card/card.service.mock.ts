import Mock = jest.Mock;
import { ICardService } from './card.service';
import { PromiseMock } from '../../test/custom-spy';
import { Card } from '../../domain/card';

export const MockCardService: Mock = jest.fn<ICardService, []>(() => {

    const getRandomCard: PromiseMock<Card>= jest.fn() as PromiseMock<Card>;

    getRandomCard.mockReturnValue(new Promise((resolve, reject) => {
        getRandomCard.resolve = (stub?: Card) => resolve(stub);
        getRandomCard.reject = (error?: Error) => reject(error);
    }));

    return {
        getRandomCard
    };
});
