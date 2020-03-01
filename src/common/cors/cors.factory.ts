import { Injectable } from 'container-ioc';
import { CorsOptions, CorsOptionsDelegate } from 'cors';
import { RequestHandler } from 'express';
import * as cors from 'cors';

@Injectable()
export class CorsFactory implements ICorsFactory {

    create(options?: CorsOptions | CorsOptionsDelegate): RequestHandler {
        return cors(options);
    }
}

export interface ICorsFactory {
    create: (options?: CorsOptions | CorsOptionsDelegate ) => RequestHandler;
}

export const TCorsFactory = Symbol('ICorsFactory');
