import { injectable } from 'inversify';
import { IRouter, Request, Response } from 'express';
import { RouterFactory } from '../common/router.factory';
import { CardService } from '../logic/card/card.service';

@injectable()
export class CardRoutes {

    router: IRouter;

    constructor(private routerFactory: RouterFactory,
                private cardService: CardService) {
        this.router = this.routerFactory.createRouter();

        this.router.get('/cards/random', this.getRandomCard);
    }

    getRandomCard = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await this.cardService.getRandomCard();
            res.status(200).send(result);
        } catch (e) {
            res.status(500).send();
        }
    }
}
