import { Injectable } from 'container-ioc';
import { Express } from 'express';
import * as http from 'http';

@Injectable()
export class Server implements IServer {

    private server: http.Server;

    start(app: Express): void {
        this.server = app.listen(8080);
    }
}

export interface IServer {
    start: (app: Express) => void;
}

export const TServer = Symbol('IServer');
