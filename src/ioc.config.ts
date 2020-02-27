import 'reflect-metadata';
import { Container } from 'inversify';
import { Server } from './server';
import { RoutesResolver } from './app.routes';
import { CardRoutes } from './controller/card.routes';
import { RouterFactory } from './common/router.factory';
import { RestApiAccessor } from './data-access/rest-api-accessor';
import { CardService } from './logic/card/card.service';
import { DatabaseAccessor } from './data-access/database.accessor';
import { CardDataAccess } from './data-access/card/card.accessor';
import { DataAccessResolver } from './app.dataaccess';

const container = new Container();

// Core
container.bind(RouterFactory).toSelf();

// Services
container.bind(CardService).toSelf();

// DataAccess
container.bind(RestApiAccessor).toSelf();
container.bind(DatabaseAccessor).toSelf();
container.bind(CardDataAccess).toSelf();

// Routes
container.bind(CardRoutes).toSelf();

// App
container.bind(DataAccessResolver).toSelf();
container.bind(RoutesResolver).toSelf();
container.bind(Server).toSelf();

export default container;
