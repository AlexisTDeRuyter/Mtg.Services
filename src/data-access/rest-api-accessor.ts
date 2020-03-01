import * as bent from 'bent';
import { Injectable } from 'container-ioc';
const getJSON = bent('json');

@Injectable()
export class RestApiAccessor implements IRestApiAccessor {

    get<T>(url: string): Promise<T> {
        return getJSON(url) as Promise<T>;
    }
}

export interface IRestApiAccessor {
    get: <T>(url: string) => Promise<T>;
}

export const TRestApiAccessor = Symbol('IRestApiAccessor');
