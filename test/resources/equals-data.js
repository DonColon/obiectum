const equalValues = [
    {
        value: {
            id: 1337,
            title: 'The Life of a Coder',
            author: {
                firstName: 'Dardan',
                familyName: 'Rrafshi',
            },
        },
        other: {
            id: 1337,
            title: 'The Life of a Coder',
            author: {
                firstName: 'Dardan',
                familyName: 'Rrafshi',
            },
        },
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
        other: {
            id: 1337,
            title: 'The Nature of Code',
            author: {
                firstName: 'Daniel',
                familyName: 'Shiffman',
            },
        },
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
        other: {
            id: 1337,
            title: 'The Nature of Code',
            author: {
                firstName: 'Daniel',
                familyName: 'Shiffman',
            },
            publishDate: '2012',
        },
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
        other: undefined,
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
        other: null,
        expected: false,
    },
    {
        value: undefined,
        other: {
            id: 1337,
            title: 'The Nature of Code',
            author: {
                firstName: 'Daniel',
                familyName: 'Shiffman',
            },
        },
        expected: false,
    },
    {
        value: null,
        other: {
            id: 1337,
            title: 'The Nature of Code',
            author: {
                firstName: 'Daniel',
                familyName: 'Shiffman',
            },
        },
        expected: false,
    },
];

export default {
    equalValues,
};
