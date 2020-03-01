import 'jest';
import { ICardAccessor } from './card.accessor';
import { PromiseMock } from '../../test/custom-spy';
import Mock = jest.Mock;

export const MockCardAccessor: Mock = jest.fn<ICardAccessor, []>(() => {

    const save: PromiseMock<any> = jest.fn() as PromiseMock<any>;

    save.mockReturnValue(new Promise((resolve, reject) => {
        save.resolve = (stub?: any) => resolve(stub);
        save.reject = (error?: Error) => reject(error);
    }));

    return {
        save
    };
});
