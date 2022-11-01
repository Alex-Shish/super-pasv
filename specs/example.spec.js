import {expect} from "chai";
describe('Math functions', function () {
    const a = 4;
    const b = 5;
    const c = a + b;
    const d = a - b;
    it.skip( 'A + B = C', function () {
        expect(c).to.eq(9);
    });
    it.only( 'A - B = D', function () {
        expect(d).to.eq(-1);
    });
});