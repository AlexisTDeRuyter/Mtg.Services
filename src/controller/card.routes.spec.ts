import { CardRoutes } from './card.routes';
import { MockRouterFactory } from '../common/router/router.factory.mock';
import { MockCardService } from '../logic/card/card.service.mock';
import { Card } from '../domain/card';
import { MockRouter, MockRequest, MockResponse, MockNextFunction } from '../test/vendor-mocks/router.mock';
import { CardStub } from '../domain/stubs/card.stub';
import { IRouterFactory } from '../common/router/router.factory';
import { ICardService } from '../logic/card/card.service';
import { IRouter, NextFunction, Request, Response } from 'express';
import { PromiseMock } from '../test/custom-spy';
import Mock = jest.Mock;

describe('CardRoutes Tests', () => {

    let sut: CardRoutes;

    const mockRouterFactory: IRouterFactory = new MockRouterFactory(),
        mockCardService: ICardService = new MockCardService(),
        mockRouter: IRouter = new MockRouter();

    const expectedCard: Card = new CardStub({}),
        expectedRequest: Request = new MockRequest(),
        expectedResponse: Response = new MockResponse(),
        expectedNextFunction: NextFunction = MockNextFunction,
        expectedError: Error = { name: 'expectedError', message: 'oh no!' };

    beforeEach(() => {
        (mockRouterFactory.create as Mock).mockReturnValue(mockRouter);
        sut = new CardRoutes(mockRouterFactory, mockCardService);
    });

    it('gets the router and registers the routes', () => {
        expect(mockRouterFactory.create).toHaveBeenCalled();

        expect(mockRouter.get).toHaveBeenCalledWith('/cards/random', expect.any(Function));
    });

    describe('When getRandomCard is called successfully', () => {

        beforeEach(() => {
            sut.getRandomCard(expectedRequest, expectedResponse, expectedNextFunction);
            (mockCardService.getRandomCard as PromiseMock<Card>).resolve(expectedCard);
        });

        it('calls cardService to get a random card', () => {
            expect(mockCardService.getRandomCard).toHaveBeenCalled();
        });

        it('succeeds with the card', () => {
            expect(expectedResponse.status).toHaveBeenCalledWith(200);
            expect(expectedResponse.send).toHaveBeenCalledWith(expectedCard);
        });
    });

    // TODO
    // describe('When getRandomCard is called unsuccessfully', () => {
    //
    //     beforeEach(() => {
    //         sut.getRandomCard(expectedRequest, expectedResponse, expectedNextFunction);
    //         (<PromiseMock<Card>>mockCardService.getRandomCard).reject(expectedError);
    //     });
    //
    //     it('calls cardService to get a random card', () => {
    //         expect(mockCardService.getRandomCard).toHaveBeenCalled();
    //     });
    //
    //     it('returns the error', () => {
    //         expect(expectedNextFunction).toHaveBeenCalledWith(expectedError);
    //     });
    // });
});
