import { IDatabaseAccessor, TDatabaseAccessor } from '../database.accessor';
import { Card } from '../../domain/card';
import { CardModel, ICardModel } from './card.model';
import { Inject, Injectable } from 'container-ioc';

@Injectable()
export class CardAccessor implements ICardAccessor {

    constructor(@Inject(TDatabaseAccessor) private dataAccess: IDatabaseAccessor) {
    }

    async save(card: Card): Promise<void> {
        await this.dataAccess.save<ICardModel>(new CardModel(card));
    }
}

export interface ICardAccessor {
    save: (card: Card) => Promise<void>;
}

export const TCardAccessor = Symbol('ICardAccessor');
