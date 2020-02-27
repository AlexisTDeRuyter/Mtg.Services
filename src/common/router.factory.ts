import { injectable } from 'inversify';
import { IRouter } from 'express';
import * as express from 'express';

@injectable()
export class RouterFactory {

    createRouter(): IRouter {
        return express.Router();
    }
}
