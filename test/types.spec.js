import { expect } from 'chai';
import { describe, it } from 'mocha';

import testData from './resources/types-data';

import {
    typeOf,
    isJsonObject,
    isRegularExpression,
    isDate,
    isUndefined,
    isNull,
    notExists,
    exists,
    isObject,
    isString,
    isNumber,
    isBoolean,

} from '../src/modules/types';

describe('type functions', () => {
    describe('#typeOf', () => {
        testData.types.forEach((data) => {
            const { value, expected } = data;
            it(`${value} should be type of ${expected}`, () => expect(typeOf(value)).to.equal(expected));
        });
    });

    describe('#isJsonObject', () => {
        testData.jsonObjects.forEach((data) => {
            const { value, expected } = data;
            it(`${value} should be ${expected}`, () => expect(isJsonObject(value)).to.be[expected]);
        });
    });

    describe('#isRegularExpression', () => {
        testData.regularExpressions.forEach((data) => {
            const { value, expected } = data;
            it(`${value} should be ${expected}`, () => expect(isRegularExpression(value)).to.be[expected]);
        });
    });

    describe('#isDate', () => {
        testData.dates.forEach((data) => {
            const { value, expected } = data;
            it(`${value} should be ${expected}`, () => expect(isDate(value)).to.be[expected]);
        });
    });

    describe('#isUndefined', () => {
        testData.undefinedValues.forEach((data) => {
            const { value, expected } = data;
            it(`${value} should be ${expected}`, () => expect(isUndefined(value)).to.be[expected]);
        });
    });

    describe('#isNull', () => {
        testData.nullValues.forEach((data) => {
            const { value, expected } = data;
            it(`${value} should be ${expected}`, () => expect(isNull(value)).to.be[expected]);
        });
    });

    describe('#notExists', () => {
        testData.notExistingValues.forEach((data) => {
            const { value, expected } = data;
            it(`${value} should be ${expected}`, () => expect(notExists(value)).to.be[expected]);
        });
    });

    describe('#exists', () => {
        testData.existingValues.forEach((data) => {
            const { value, expected } = data;
            it(`${value} should be ${expected}`, () => expect(exists(value)).to.be[expected]);
        });
    });

    describe('#isObject', () => {
        testData.objects.forEach((data) => {
            const { value, expected } = data;
            it(`${value} should be ${expected}`, () => expect(isObject(value)).to.be[expected]);
        });
    });

    describe('#isString', () => {
        testData.strings.forEach((data) => {
            const { value, expected } = data;
            it(`${value} should be ${expected}`, () => expect(isString(value)).to.be[expected]);
        });
    });

    describe('#isNumber', () => {
        testData.numbers.forEach((data) => {
            const { value, expected } = data;
            it(`${value} should be ${expected}`, () => expect(isNumber(value)).to.be[expected]);
        });
    });

    describe('#isBoolean', () => {
        testData.booleans.forEach((data) => {
            const { value, expected } = data;
            it(`${value} should be ${expected}`, () => expect(isBoolean(value)).to.be[expected]);
        });
    });
});
