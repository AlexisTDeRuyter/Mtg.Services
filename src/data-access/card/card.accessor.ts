import { injectable } from 'inversify';
import { DatabaseAccessor } from '../database.accessor';
import { Card } from '../../domain/card';
import { CardModel, ICardModel } from './card.model';

@injectable()
export class CardDataAccess implements ICardDataAccess {

    constructor(private dataAccess: DatabaseAccessor) {
    }

    async save(card: Card): Promise<void> {
        await this.dataAccess.save<ICardModel>(new CardModel(card));
    }
}

export interface ICardDataAccess {
    save: (card: Card) => Promise<void>;
}
