import { expect } from 'chai';
import { describe, it } from 'mocha';

import testData from './resources/equals-data';
import equals from '../src/modules/equals';

describe('equals function', () => {
    describe('#equals', () => {
        testData.equalValues.forEach((data) => {
            const { value, other, expected } = data;
            it(`should return ${expected}`, () => expect(equals(value, other)).to.be[expected]);
        });
    });
});
