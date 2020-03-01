import { DatabaseAccessor } from './database.accessor';
import { IStubModel, StubModel } from './stubs/model.stub';

describe('DatabaseAccessor Tests', () => {

    let sut: DatabaseAccessor;

    const expectedModel: IStubModel = new StubModel({ value: 'ExpectedValue'});

    beforeEach(() => {
        sut = new DatabaseAccessor();
    });

    describe('When save is called', () => {

        beforeEach(() => {
            spyOn<IStubModel>(expectedModel, 'save');
            sut.save<IStubModel>(expectedModel);
        });

        it('saves the model', () => {
            expect(expectedModel.save).toHaveBeenCalled();
        });
    });
});
