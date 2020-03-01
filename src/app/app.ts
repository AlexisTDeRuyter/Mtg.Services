import { IServer, TServer } from './server/server';
import { IRoutesResolver, TRoutesResolver } from './routes/routes.resolver';
import { IDataAccessFactory, TDataAccessFactory } from '../common/data-access/data-access.factory';
import { Inject, Injectable } from 'container-ioc';
import { Express } from 'express';
import { IExpressFactory, TExpressFactory } from '../common/express/express.factory';
import { ICorsFactory, TCorsFactory } from '../common/cors/cors.factory';

@Injectable()
export class App implements IApp {

    constructor(@Inject(TServer) private server: IServer,
                @Inject(TRoutesResolver) private routesResolver: IRoutesResolver,
                @Inject(TDataAccessFactory) private dataAccessResolver: IDataAccessFactory,
                @Inject(TExpressFactory) private appResolver: IExpressFactory,
                @Inject(TCorsFactory) private corsResolver: ICorsFactory) {
    }

    async initialize(): Promise<void> {
        const app: Express = this.appResolver.create();

        app.use(this.corsResolver.create({
            origin: 'http://localhost:4200',
            optionsSuccessStatus: 200
        }));

        await this.dataAccessResolver.connect();
        this.routesResolver.initialize(app);
        this.server.start(app);
    }
}

export interface IApp {
    initialize: () => Promise<void>;
}

export const TApp = Symbol('IApp');
