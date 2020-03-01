import { ICardRoutes, TCardRoutes } from '../../controller/card.routes';
import { Inject, Injectable } from 'container-ioc';
import { Express } from 'express';

@Injectable()
export class RoutesResolver implements IRoutesResolver {

    constructor(@Inject(TCardRoutes) private cardRoutes: ICardRoutes) {
    }

    initialize(app: Express): void {
        app.use('', this.cardRoutes.router);
    }
}

export interface IRoutesResolver {
    initialize: (app: Express) => void;
}

export const TRoutesResolver = Symbol('IRoutesResolver');
