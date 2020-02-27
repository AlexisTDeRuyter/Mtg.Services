import { Server } from './server';
import * as express from 'express';
import { RoutesResolver } from './app.routes';
import * as cors from 'cors';
import { DataAccessResolver } from './app.dataaccess';

export class App {

    constructor(private server: Server,
                private routesResolver: RoutesResolver,
                private dataAccessResolver: DataAccessResolver) {
    }

    async init(): Promise<void> {
        const app = express();
        app.use(cors({
            origin: 'http://localhost:4200',
            optionsSuccessStatus: 200
        }));
        await this.dataAccessResolver.initialize();
        this.routesResolver.initialize(app);
        this.server.start(app);
    }
}

export default App;
