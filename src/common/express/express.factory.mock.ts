import Mock = jest.Mock;
import { IExpressFactory } from './express.factory';

export const MockExpressFactory: Mock = jest.fn<IExpressFactory, []>(() => {

    const create: Mock = jest.fn();

    return {
        create
    };
});
