import { injectable } from 'inversify';
import * as bent from 'bent';

const getJSON = bent('json');

@injectable()
export class RestApiAccessor {

    get<T>(url: string): Promise<T> {
        return getJSON(url) as Promise<T>;
    }
}
