import App from './app';
import container from './ioc.config';
import { Server } from './server';
import { RoutesResolver } from './app.routes';
import { DataAccessResolver } from './app.dataaccess';

new App(
    container.get<Server>(Server),
    container.get<RoutesResolver>(RoutesResolver),
    container.get<DataAccessResolver>(DataAccessResolver))
    .init();

export {};
