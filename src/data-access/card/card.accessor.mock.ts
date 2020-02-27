import 'jasmine';
import { CardDataAccess } from './card.accessor';
import { PromiseSpy } from '../../test/custom-spy';
import { Card } from '../../domain/card';

export class MockCardDataAccess {

    mock: jasmine.SpyObj<CardDataAccess>;

    save: PromiseSpy<Card>;

    constructor() {
        this.mock = jasmine.createSpyObj('MockCardDataAccess', [
            'save'
        ]);

        this.save = this.mock.save as PromiseSpy<Card>;
        this.save.and.returnValue(new Promise((resolve, reject) => {
            this.save.resolve = (card: Card) => resolve(card);
            this.save.reject = (error?: Error) => reject(error);
        }));
    }
}
