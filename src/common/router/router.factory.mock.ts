import { IRouterFactory } from './router.factory';
import Mock = jest.Mock;

export const MockRouterFactory: Mock = jest.fn<IRouterFactory, []>(() => {

    const create: Mock = jest.fn();

    return {
        create: create
    };
});
