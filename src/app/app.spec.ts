import { App } from './app';
import { IServer } from './server/server';
import { MockServer } from './server/server.mock';
import { IRoutesResolver } from './routes/routes.resolver';
import { IDataAccessFactory } from '../common/data-access/data-access.factory';
import { IExpressFactory } from '../common/express/express.factory';
import { MockRoutesResolver } from './routes/routes.resolver.mock';
import { MockDataAccessFactory } from '../common/data-access/data-access.factory.mock';
import { MockExpressFactory } from '../common/express/express.factory.mock';
import { MockExpress } from '../test/vendor-mocks/express.mock';
import { Express, RequestHandler } from 'express';
import { ICorsFactory } from '../common/cors/cors.factory';
import { MockCorsFactory } from '../common/cors/cors.factory.mock';
import { PromiseMock } from '../test/custom-spy';
import Mock = jest.Mock;

describe('App Tests', () => {

    let sut: App;

    const mockServer: IServer = new MockServer(),
          mockRoutesResolver: IRoutesResolver = new MockRoutesResolver(),
          mockDataAccessFactory: IDataAccessFactory = new MockDataAccessFactory(),
          mockExpressFactory: IExpressFactory = new MockExpressFactory(),
          mockExpress: Express = new MockExpress(),
          mockCorsFactory: ICorsFactory = new MockCorsFactory();

    const expectedCorsResult: RequestHandler = {} as any as RequestHandler;

    beforeEach(() => {
        sut = new App(mockServer, mockRoutesResolver, mockDataAccessFactory, mockExpressFactory, mockCorsFactory);
    });

    describe('When init is called', () => {

        beforeEach(() => {
            (mockExpressFactory.create as Mock).mockReturnValue(mockExpress);
            (mockCorsFactory.create as Mock).mockReturnValue(expectedCorsResult);
            sut.initialize();
            (mockDataAccessFactory.connect as PromiseMock<void>).resolve();
        });

        it('sets up cors', () => {
            expect(mockCorsFactory.create).toHaveBeenCalledWith({
                origin: 'http://localhost:4200',
                optionsSuccessStatus: 200
            });

            expect(mockExpress.use).toHaveBeenCalledWith(expectedCorsResult);
        });

        it('initializes data access', () => {
            expect(mockDataAccessFactory.connect).toHaveBeenCalled();
        });

        it('initializes routes', () => {
            expect(mockRoutesResolver.initialize).toHaveBeenCalledWith(mockExpress);
        });

        it('starts the server', () => {
            expect(mockServer.start).toHaveBeenCalledWith(mockExpress);
        });
    });
});
