const types = [
    {
        value: {
            id: 5,
            description: 'A test object',
        },
        expected: 'Object',
    },
    {
        value: 3455252,
        expected: 'Number',
    },
    {
        value: 'Hello World',
        expected: 'String',
    },
    {
        value: true,
        expected: 'Boolean',
    },
    {
        value: new Date(2020, 10, 18),
        expected: 'Date',
    },
    {
        value: /^[object (S+?)]$/,
        expected: 'RegExp',
    },
    {
        value: undefined,
        expected: 'Undefined',
    },
    {
        value: null,
        expected: 'Null',
    },
];

const jsonObjects = [
    {
        value: {
            id: 5,
            description: 'A test object',
        },
        expected: true,
    },
    {
        value: 3455252,
        expected: false,
    },
    {
        value: 'Hello World',
        expected: false,
    },
    {
        value: true,
        expected: false,
    },
    {
        value: new Date(2020, 10, 18),
        expected: false,
    },
    {
        value: /^[object (S+?)]$/,
        expected: false,
    },
    {
        value: undefined,
        expected: false,
    },
    {
        value: null,
        expected: false,
    },
];

const regularExpressions = [
    {
        value: {
            id: 5,
            description: 'A test object',
        },
        expected: false,
    },
    {
        value: 3455252,
        expected: false,
    },
    {
        value: 'Hello World',
        expected: false,
    },
    {
        value: true,
        expected: false,
    },
    {
        value: new Date(2020, 10, 18),
        expected: false,
    },
    {
        value: /^[object (S+?)]$/,
        expected: true,
    },
    {
        value: undefined,
        expected: false,
    },
    {
        value: null,
        expected: false,
    },
];

const dates = [
    {
        value: {
            id: 5,
            description: 'A test object',
        },
        expected: false,
    },
    {
        value: 3455252,
        expected: false,
    },
    {
        value: 'Hello World',
        expected: false,
    },
    {
        value: true,
        expected: false,
    },
    {
        value: new Date(2020, 10, 18),
        expected: true,
    },
    {
        value: /^[object (S+?)]$/,
        expected: false,
    },
    {
        value: undefined,
        expected: false,
    },
    {
        value: null,
        expected: false,
    },
];

const undefinedValues = [
    {
        value: {
            id: 5,
            description: 'A test object',
        },
        expected: false,
    },
    {
        value: 3455252,
        expected: false,
    },
    {
        value: 'Hello World',
        expected: false,
    },
    {
        value: true,
        expected: false,
    },
    {
        value: new Date(2020, 10, 18),
        expected: false,
    },
    {
        value: /^[object (S+?)]$/,
        expected: false,
    },
    {
        value: undefined,
        expected: true,
    },
    {
        value: null,
        expected: false,
    },
];

const nullValues = [
    {
        value: {
            id: 5,
            description: 'A test object',
        },
        expected: false,
    },
    {
        value: 3455252,
        expected: false,
    },
    {
        value: 'Hello World',
        expected: false,
    },
    {
        value: true,
        expected: false,
    },
    {
        value: new Date(2020, 10, 18),
        expected: false,
    },
    {
        value: /^[object (S+?)]$/,
        expected: false,
    },
    {
        value: undefined,
        expected: false,
    },
    {
        value: null,
        expected: true,
    },
];

const notExistingValues = [
    {
        value: {
            id: 5,
            description: 'A test object',
        },
        expected: false,
    },
    {
        value: 3455252,
        expected: false,
    },
    {
        value: 'Hello World',
        expected: false,
    },
    {
        value: true,
        expected: false,
    },
    {
        value: new Date(2020, 10, 18),
        expected: false,
    },
    {
        value: /^[object (S+?)]$/,
        expected: false,
    },
    {
        value: undefined,
        expected: true,
    },
    {
        value: null,
        expected: true,
    },
];

const existingValues = [
    {
        value: {
            id: 5,
            description: 'A test object',
        },
        expected: true,
    },
    {
        value: 3455252,
        expected: true,
    },
    {
        value: 'Hello World',
        expected: true,
    },
    {
        value: true,
        expected: true,
    },
    {
        value: new Date(2020, 10, 18),
        expected: true,
    },
    {
        value: /^[object (S+?)]$/,
        expected: true,
    },
    {
        value: undefined,
        expected: false,
    },
    {
        value: null,
        expected: false,
    },
];

const objects = [
    {
        value: {
            id: 5,
            description: 'A test object',
        },
        expected: true,
    },
    {
        value: 3455252,
        expected: false,
    },
    {
        value: 'Hello World',
        expected: false,
    },
    {
        value: true,
        expected: false,
    },
    {
        value: new Date(2020, 10, 18),
        expected: true,
    },
    {
        value: /^[object (S+?)]$/,
        expected: true,
    },
    {
        value: undefined,
        expected: false,
    },
    {
        value: null,
        expected: true,
    },
];

const strings = [
    {
        value: {
            id: 5,
            description: 'A test object',
        },
        expected: false,
    },
    {
        value: 3455252,
        expected: false,
    },
    {
        value: 'Hello World',
        expected: true,
    },
    {
        value: true,
        expected: false,
    },
    {
        value: new Date(2020, 10, 18),
        expected: false,
    },
    {
        value: /^[object (S+?)]$/,
        expected: false,
    },
    {
        value: undefined,
        expected: false,
    },
    {
        value: null,
        expected: false,
    },
];

const numbers = [
    {
        value: {
            id: 5,
            description: 'A test object',
        },
        expected: false,
    },
    {
        value: 3455252,
        expected: true,
    },
    {
        value: 'Hello World',
        expected: false,
    },
    {
        value: true,
        expected: false,
    },
    {
        value: new Date(2020, 10, 18),
        expected: false,
    },
    {
        value: /^[object (S+?)]$/,
        expected: false,
    },
    {
        value: undefined,
        expected: false,
    },
    {
        value: null,
        expected: false,
    },
    {
        value: NaN,
        expected: true,
    },
];

const booleans = [
    {
        value: {
            id: 5,
            description: 'A test object',
        },
        expected: false,
    },
    {
        value: 3455252,
        expected: false,
    },
    {
        value: 'Hello World',
        expected: false,
    },
    {
        value: true,
        expected: true,
    },
    {
        value: new Date(2020, 10, 18),
        expected: false,
    },
    {
        value: /^[object (S+?)]$/,
        expected: false,
    },
    {
        value: undefined,
        expected: false,
    },
    {
        value: null,
        expected: false,
    },
];

export default {
    types,
    jsonObjects,
    regularExpressions,
    dates,
    undefinedValues,
    nullValues,
    notExistingValues,
    existingValues,
    objects,
    strings,
    numbers,
    booleans,
};
