import Mock = jest.Mock;

export interface PromiseMock<T> extends Mock {
    resolve: (stub?: T) => void;
    reject: (error?: Error) => void;
}
