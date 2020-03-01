import Mock = jest.Mock;
import { IRouter, NextFunction, Request, Response } from 'express';

export const MockRouter: Mock = jest.fn<IRouter, []>(() => {
    const
        param: Mock = jest.fn(),
        all: Mock = jest.fn(),
        get: Mock = jest.fn(),
        post: Mock = jest.fn(),
        put: Mock = jest.fn(),
        patch: Mock = jest.fn(),
        options: Mock = jest.fn(),
        head: Mock = jest.fn(),
        checkout: Mock = jest.fn(),
        connect: Mock = jest.fn(),
        copy: Mock = jest.fn(),
        lock: Mock = jest.fn(),
        merge: Mock = jest.fn(),
        mkactivity: Mock = jest.fn(),
        mkcol: Mock = jest.fn(),
        move: Mock = jest.fn(),
        notify: Mock = jest.fn(),
        propfind: Mock = jest.fn(),
        proppatch: Mock = jest.fn(),
        purge: Mock = jest.fn(),
        report: Mock = jest.fn(),
        search: Mock = jest.fn(),
        subscribe: Mock = jest.fn(),
        trace: Mock = jest.fn(),
        unlock: Mock = jest.fn(),
        unsubscribe: Mock = jest.fn(),
        use: Mock = jest.fn(),
        route: Mock = jest.fn(),
        stack: Mock = jest.fn();

    return {
        param,

        all,
        get,
        post,
        put,
        patch,
        options,
        head,

        checkout,
        connect,
        copy,
        lock,
        merge,
        mkactivity,
        mkcol,
        move,
        notify,
        propfind,
        proppatch,
        purge,
        report,
        search,
        subscribe,
        trace,
        unlock,
        unsubscribe,

        use,

        route,

        stack
    } as any as IRouter;
});

export const MockRequest: Mock = jest.fn<Request, []>();

export const MockResponse: Mock = jest.fn<Response, []>(() => {

    let mock: Response;

    const
        status: Mock = jest.fn(),
        send: Mock = jest.fn();

    mock = {
        status,
        send
    } as any as Response;

    status.mockReturnValue(mock);

    return mock;
});

export const MockNextFunction: Mock = jest.fn();
