import { expect } from 'chai';
import { describe, it } from 'mocha';

import testData from './resources/freeze-data';
import freeze from '../src/modules/freeze';

describe('freeze function', () => {
    describe('#freeze', () => {
        testData.frozen.forEach((data) => {
            const { value, expected } = data;

            const frozen = freeze(value);

            it(`should throw TypeError`, () => expect(() => modify(frozen)).to.throw(TypeError));
        });
    });
});

function modify(value) {
    value.id = 11;
    value.title = 'The Nature of Code';
    value.author.firstName = 'Daniel';
    value.author.familyName = 'Shiffman';
}
