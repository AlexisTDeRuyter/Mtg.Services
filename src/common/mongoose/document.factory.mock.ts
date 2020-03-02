import Mock = jest.Mock;
import { IDocumentFactory } from './document.factory';

export const MockDocumentFactory: Mock = jest.fn<IDocumentFactory, []>(() => {

    const create: Mock = jest.fn();

    return {
        create
    };
});
