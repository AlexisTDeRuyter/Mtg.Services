import Mock = jest.Mock;
import { IDataAccessFactory } from './data-access.factory';
import { PromiseMock } from '../../test/custom-spy';

export const MockDataAccessFactory: Mock = jest.fn<IDataAccessFactory, []>(() => {

    const connect: PromiseMock<void> = jest.fn() as PromiseMock<void>;

    connect.mockReturnValue(new Promise((resolve, reject) => {
        connect.resolve = resolve;
        connect.reject = reject;
    }));

    return {
        connect
    };
});
