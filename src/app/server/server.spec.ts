import { Server } from './server';
import { Express } from 'express';
import { MockExpress } from '../../test/vendor-mocks/express.mock';

describe('Server Tests', () => {

    let sut: Server;

    const mockExpress: Express = new MockExpress();

    beforeEach(() => {
        sut = new Server();
    });

    describe('When start is called', () => {

        beforeEach(() => {
            sut.start(mockExpress);
        });

        it('starts the app on port 8080', () => {
            expect(mockExpress.listen).toHaveBeenCalledWith(8080);
        });
    });
});
