import Mock = jest.Mock;
import { CardRoutes, ICardRoutes } from './card.routes';
import { PromiseMock } from '../test/custom-spy';

export const MockCardRoutes: Mock = jest.fn<ICardRoutes, []>(() => {

    const router: Mock = jest.fn();
    const getRandomCard: PromiseMock<void> = jest.fn() as PromiseMock<void>;

    getRandomCard.mockReturnValue(new Promise((resolve, reject) => {
        getRandomCard.resolve = resolve;
        getRandomCard.reject = reject;
    }));

    return {
        router,
        getRandomCard
    } as any as CardRoutes;
});
