import { IDatabaseAccessor, TDatabaseAccessor } from '../database.accessor';
import { Card } from '../../domain/card';
import { CardModel, ICardModel } from './card.model';
import { Inject, Injectable } from 'container-ioc';
import { IDocumentFactory, TDocumentFactory } from '../../common/mongoose/document.factory';

@Injectable()
export class CardAccessor implements ICardAccessor {

    constructor(@Inject(TDatabaseAccessor) private dataAccess: IDatabaseAccessor,
                @Inject(TDocumentFactory) private documentFactory: IDocumentFactory) {
    }

    async save(card: Card): Promise<void> {
        await this.dataAccess.save<ICardModel>(this.documentFactory.create(CardModel, card));
    }
}

export interface ICardAccessor {
    save: (card: Card) => Promise<void>;
}

export const TCardAccessor = Symbol('ICardAccessor');
