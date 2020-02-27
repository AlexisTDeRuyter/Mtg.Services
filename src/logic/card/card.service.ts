import { injectable } from 'inversify';
import { RestApiAccessor } from '../../data-access/rest-api-accessor';
import { Card } from '../../domain/card';
import { CardDataAccess } from '../../data-access/card/card.accessor';

@injectable()
export class CardService {

    private readonly SCRYFALL_BASE_URL = 'https://api.scryfall.com/cards';

    constructor(private restApiAccessor: RestApiAccessor,
                private cardDataAccess: CardDataAccess) {
    }

    async getRandomCard(): Promise<Card> {
        const card = await this.restApiAccessor.get<Card>(`${this.SCRYFALL_BASE_URL}/random`);
        await this.cardDataAccess.save(card);
        return card;
    }
}
