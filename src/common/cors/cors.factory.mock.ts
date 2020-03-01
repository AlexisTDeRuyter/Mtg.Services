import Mock = jest.Mock;
import { ICorsFactory } from './cors.factory';

export const MockCorsFactory: Mock = jest.fn<ICorsFactory, []>(() => {

    const create: Mock = jest.fn();

    return {
        create
    };
});
