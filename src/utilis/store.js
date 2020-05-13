const cards = [
    {
        id: 'card-1',
        title: 'Programming a project',
    },
    {
        id: 'card-2',
        title: 'Studying Japanese ',
    },
    {
        id: 'card-3',
        title: '2 hour workout',
    },
    {
        id: 'card-4',
        title: 'Reading',
    },
];

const data = {
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'Todo',
            cards,
        },
        'list-2': {
            id: 'list-2',
            title: 'Doing',
            cards: [],
        },
    },
    listIds: ['list-1', 'list-2'],
};

export default data;