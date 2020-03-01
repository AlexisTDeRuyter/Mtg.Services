import { Injectable } from 'container-ioc';
import { Express } from 'express';
import * as express from 'express';

@Injectable()
export class ExpressFactory implements IExpressFactory {

    create(): Express {
        return express();
    }
}

export interface IExpressFactory {
    create: () => Express;
}

export const TExpressFactory = Symbol('IExpressFactory');
