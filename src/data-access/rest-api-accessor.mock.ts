import 'jest';
import { IRestApiAccessor } from './rest-api-accessor';
import { PromiseMock } from '../test/custom-spy';
import Mock = jest.Mock;

export const MockRestApiAccessor: Mock = jest.fn<IRestApiAccessor, []>(() => {

    const get: PromiseMock<any> = jest.fn() as PromiseMock<any>;

    get.mockReturnValue(new Promise((resolve, reject) => {
        get.resolve = (stub?: any) => resolve(stub);
        get.reject = (error?: Error) => reject(error);
    }));

    return {
        get
    };
});
