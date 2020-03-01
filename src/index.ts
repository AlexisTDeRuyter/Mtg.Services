import { App, IApp, TApp } from './app/app';
import { Container } from 'container-ioc';
import { RouterFactory, TRouterFactory } from './common/router/router.factory';
import { CardService, TCardService } from './logic/card/card.service';
import { RestApiAccessor, TRestApiAccessor } from './data-access/rest-api-accessor';
import { DatabaseAccessor, TDatabaseAccessor } from './data-access/database.accessor';
import { CardAccessor, TCardAccessor } from './data-access/card/card.accessor';
import { CardRoutes, TCardRoutes } from './controller/card.routes';
import { DataAccessFactory, TDataAccessFactory } from './common/data-access/data-access.factory';
import { RoutesResolver, TRoutesResolver } from './app/routes/routes.resolver';
import { Server, TServer } from './app/server/server';
import { ExpressFactory, TExpressFactory } from './common/express/express.factory';
import { CorsFactory, TCorsFactory } from './common/cors/cors.factory';


const container = new Container();

container.register([
    // Core
    { token: TRouterFactory, useClass: RouterFactory },
    { token: TExpressFactory, useClass: ExpressFactory },
    { token: TCorsFactory, useClass: CorsFactory },
    { token: TDataAccessFactory, useClass: DataAccessFactory },

    // Services
    { token: TCardService, useClass: CardService },

    // DataAccess
    { token: TRestApiAccessor, useClass: RestApiAccessor },
    { token: TDatabaseAccessor, useClass: DatabaseAccessor },
    { token: TCardAccessor, useClass: CardAccessor },

    // Routes
    { token: TCardRoutes, useClass: CardRoutes },

    // App
    { token: TRoutesResolver, useClass: RoutesResolver },
    { token: TServer, useClass: Server },
    { token: TApp, useClass: App },
]);

const app: IApp = container.resolve(TApp);

app.initialize();

export {};
