import { IRouter, NextFunction, Request, Response } from 'express';
import { IRouterFactory, TRouterFactory } from '../common/router/router.factory';
import { ICardService, TCardService } from '../logic/card/card.service';
import { Inject, Injectable } from 'container-ioc';

@Injectable()
export class CardRoutes implements ICardRoutes {

    router: IRouter;

    constructor(@Inject(TRouterFactory) private routerFactory: IRouterFactory,
                @Inject(TCardService) private cardService: ICardService) {
        this.router = this.routerFactory.create();

        this.router.get('/cards/random', this.getRandomCard);
    }

    getRandomCard = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const result = await this.cardService.getRandomCard();
            res.status(200).send(result);
        } catch (e) {
            next(e);
        }
    }
}

export interface ICardRoutes {
    router: IRouter;
    getRandomCard: (request: Request, response: Response, next: NextFunction) => Promise<void>;
}

export const TCardRoutes = Symbol('ICardRoutes');
