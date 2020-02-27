import { injectable } from 'inversify';

@injectable()
export class Server {

    private server: any;

    start(app: any): void {
        this.server = app.listen(8080);
    }
}
