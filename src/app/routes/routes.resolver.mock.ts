import Mock = jest.Mock;
import { IRoutesResolver } from './routes.resolver';

export const MockRoutesResolver: Mock = jest.fn<IRoutesResolver, []>(() => {

    const initialize: Mock = jest.fn();

    return {
        initialize
    };
});
