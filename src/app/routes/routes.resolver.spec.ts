import { RoutesResolver } from './routes.resolver';
import { ICardRoutes } from '../../controller/card.routes';
import { MockCardRoutes } from '../../controller/card.routes.mock';
import { Express } from 'express';
import { MockExpress } from '../../test/vendor-mocks/express.mock';

describe('RoutesResolver Tests', () => {

    let sut: RoutesResolver;

    const mockCardRoutes: ICardRoutes = new MockCardRoutes(),
          mockExpress: Express = new MockExpress();

    beforeEach(() => {
        sut = new RoutesResolver(mockCardRoutes);
    });

    describe('When initialize is called', () => {

        beforeEach(() => {
            sut.initialize(mockExpress);
        });

        it('registers the routes', () => {
            expect(mockExpress.use).toHaveBeenCalledWith('', mockCardRoutes.router);
        });
    });
});
