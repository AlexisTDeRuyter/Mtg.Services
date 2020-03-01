import { IRouter } from 'express';
import * as express from 'express';
import { Injectable } from 'container-ioc';

@Injectable()
export class RouterFactory implements IRouterFactory {

    create(): IRouter {
        return express.Router();
    }
}

export interface IRouterFactory {
    create: () => IRouter;
}

export const TRouterFactory = Symbol('IRouterFactory');
