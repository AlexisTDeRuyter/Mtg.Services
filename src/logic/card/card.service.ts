import { IRestApiAccessor, TRestApiAccessor } from '../../data-access/rest-api-accessor';
import { Card } from '../../domain/card';
import { ICardAccessor, TCardAccessor } from '../../data-access/card/card.accessor';
import { Inject, Injectable } from 'container-ioc';

@Injectable()
export class CardService implements ICardService {

    private readonly SCRYFALL_BASE_URL = 'https://api.scryfall.com/cards';

    constructor(@Inject(TRestApiAccessor) private restApiAccessor: IRestApiAccessor,
                @Inject(TCardAccessor) private cardDataAccess: ICardAccessor) {
    }

    async getRandomCard(): Promise<Card> {
        const card = await this.restApiAccessor.get<Card>(`${this.SCRYFALL_BASE_URL}/random`);
        await this.cardDataAccess.save(card);
        return card;
    }
}

export interface ICardService {
    getRandomCard: () => Promise<Card>;
}

export const TCardService = Symbol('ICardService');
