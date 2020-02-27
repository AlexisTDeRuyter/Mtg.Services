import { injectable } from 'inversify';
import container from './ioc.config';
import { CardRoutes } from './controller/card.routes';

@injectable()
export class RoutesResolver {

    initialize(app: any): void {
        app.use('', container.get<CardRoutes>(CardRoutes).router);
    }
}
