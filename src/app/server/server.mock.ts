import Mock = jest.Mock;
import { IServer } from './server';

export const MockServer: Mock = jest.fn<IServer, []>(() => {

    const start: Mock = jest.fn();

    return {
        start
    };
});
