import Mock = jest.Mock;
import { IDatabaseAccessor } from './database.accessor';
import { PromiseMock } from '../test/custom-spy';

export const MockDatabaseAccessor: Mock = jest.fn<IDatabaseAccessor, []>(<T extends Document>() => {

    const save: PromiseMock<T> = jest.fn() as PromiseMock<T>;

    save.mockReturnValue(new Promise((resolve, reject) => {
        save.resolve = (stub?: any) => resolve(stub);
        save.reject = (error?: Error) => reject(error);
    }));

    return {
        save
    };
});
