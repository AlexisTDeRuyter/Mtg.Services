import 'jasmine';
import { RestApiAccessor } from './rest-api-accessor';
import { PromiseSpy } from '../test/custom-spy';

export class MockRestApiAccessor {

    mock: jasmine.SpyObj<RestApiAccessor>;

    get: PromiseSpy<any>;

    constructor() {
        this.mock = jasmine.createSpyObj('MockRestApiAccessor', [
            'get'
        ]);
        this.get = this.mock.get as PromiseSpy<any>;
        this.get.and.returnValue(new Promise((resolve, reject) => {
            this.get.resolve = (stub?: any) => resolve(stub);
            this.get.reject = (error?: Error) => reject(error);
        }));
    }
}
