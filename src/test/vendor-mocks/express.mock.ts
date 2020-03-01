import Mock = jest.Mock;
import { Express } from 'express';

export const MockExpress: Mock = jest.fn<Express, []>(() => {

    const use: Mock = jest.fn();
    const listen: Mock = jest.fn();

    return {
        use,
        listen
    } as any as Express;
});
