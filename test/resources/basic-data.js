const properties = [
    {
        value: {
            id: 1337,
            title: 'The Life of a Coder',
            author: {
                firstName: 'Dardan',
                familyName: 'Rrafshi',
            },
        },
        path: '/author/firstName',
        expected: 'Dardan',
    },
    {
        value: new Date(2020, 10, 18),
        path: '/id',
        expected: null,
    },
    {
        value: {
            id: 1337,
            title: 'The Life of a Coder',
            author: {
                firstName: 'Dardan',
                familyName: 'Rrafshi',
            },
        },
        path: '/publisher',
        expected: undefined,
    },
    {
        value: {
            id: 1337,
            title: 'The Life of a Coder',
            author: {
                firstName: 'Dardan',
                familyName: 'Rrafshi',
            },
        },
        path: '',
        expected: null,
    },
];

const keys = [
    {
        value: {
            id: 1337,
            title: 'The Life of a Coder',
            author: {
                firstName: 'Dardan',
                familyName: 'Rrafshi',
            },
        },
        sorted: false,
        expected: ['id', 'title', 'author'],
    },
    {
        value: {
            id: 1337,
            title: 'The Life of a Coder',
            author: {
                firstName: 'Dardan',
                familyName: 'Rrafshi',
            },
        },
        sorted: true,
        expected: ['author', 'id', 'title'],
    },
    {
        value: new Date(2020, 10, 18),
        sorted: false,
        expected: [],
    },
];

const values = [
    {
        value: {
            id: 1337,
            title: 'The Life of a Coder',
            author: {
                firstName: 'Dardan',
                familyName: 'Rrafshi',
            },
        },
        expected: [
            1337,
            'The Life of a Coder',
            {
                firstName: 'Dardan',
                familyName: 'Rrafshi',
            },
        ],
    },
    {
        value: new Date(2020, 10, 18),
        expected: [],
    },
];

const hasKeys = [
    {
        value: {
            id: 1337,
            title: 'The Life of a Coder',
            author: {
                firstName: 'Dardan',
                familyName: 'Rrafshi',
            },
        },
        key: 'id',
        expected: true,
    },
    {
        value: {
            id: 1337,
            title: 'The Life of a Coder',
            author: {
                firstName: 'Dardan',
                familyName: 'Rrafshi',
            },
        },
        key: '',
        expected: false,
    },
    {
        value: {
            id: 1337,
            title: 'The Life of a Coder',
            author: {
                firstName: 'Dardan',
                familyName: 'Rrafshi',
            },
        },
        key: 1337,
        expected: false,
    },
    {
        value: new Date(2020, 10, 18),
        key: 'id',
        expected: false,
    },
];

const sizes = [
    {
        value: {
            id: 1337,
            title: 'The Life of a Coder',
            author: {
                firstName: 'Dardan',
                familyName: 'Rrafshi',
            },
        },
        expected: 3,
    },
    {
        value: new Date(2020, 10, 18),
        expected: 0,
    },
];

export default {
    properties, keys, values, hasKeys, sizes,
};
