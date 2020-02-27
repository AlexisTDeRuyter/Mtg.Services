export interface PromiseSpy<T> extends jasmine.Spy {
    resolve: (stub?: T) => void;
    reject: (error?: Error) => void;
}
