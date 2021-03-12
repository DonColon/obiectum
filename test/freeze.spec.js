import { expect } from 'chai';
import { describe, it } from 'mocha';

import testData from './resources/freeze-data';
import freeze from '../src/modules/freeze';

function modify(value) {
    const frozen = value;
    frozen.title = 'The Nature of Code';
    frozen.author.firstName = 'Daniel';
    frozen.author.familyName = 'Shiffman';
    frozen.id = 11;
}

describe('freeze function', () => {
    describe('#freeze', () => {
        testData.frozen.forEach((data) => {
            const { value } = data;

            const frozen = freeze(value);
            it('should throw TypeError', () => expect(() => modify(frozen)).to.throw(TypeError));
        });
    });
});
