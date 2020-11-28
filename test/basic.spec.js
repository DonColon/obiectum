import { expect } from 'chai';
import { describe, it } from 'mocha';

import testData from './resources/basic-data';

import {
    getProperty,
    keys,
    values,
    has,
    size,

} from '../src/modules/basic';

describe('basic functions', () => {
    describe('#getProperty', () => {
        testData.properties.forEach((data) => {
            const { value, path, expected } = data;
            it(`${path} should return ${expected}`, () => expect(getProperty(value, path)).to.eql(expected));
        });
    });

    describe('#keys', () => {
        testData.keys.forEach((data) => {
            const { value, sorted, expected } = data;
            it(`should return ${expected}`, () => expect(keys(value, sorted)).to.eql(expected));
        });
    });

    describe('#values', () => {
        testData.values.forEach((data) => {
            const { value, expected } = data;
            it(`should return ${expected}`, () => expect(values(value)).to.eql(expected));
        });
    });

    describe('#has', () => {
        testData.hasKeys.forEach((data) => {
            const { value, key, expected } = data;
            it(`should return ${expected}`, () => expect(has(value, key)).to.be[expected]);
        });
    });

    describe('#size', () => {
        testData.sizes.forEach((data) => {
            const { value, expected } = data;
            it(`should return ${expected}`, () => expect(size(value)).to.equal(expected));
        });
    });
});
