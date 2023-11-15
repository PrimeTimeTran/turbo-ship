export const original = [
  {
    _id: 'ca2f49aeb624adea4e98e491',
    name: 'user',
    label: 'User',
    plural: 'Users',
    lowerPlural: 'users',
    showAttributes: false,
    showAddAttribute: false,
    attributes: [
      {
        name: '_id',
        type: 'string',
        _id: 'db12e8c73ef7c653ff0783dd',
      },
      {
        name: 'email',
        type: 'string',
        _id: '5b8a6bdcd5af3fcaf71f0fbd',
        validators: [
          {
            name: 'email',
            required: true,
          },
        ],
      },
      {
        name: 'firstName',
        type: 'string',
        _id: 'bca074198bf813e1e8be2ece',
      },
      {
        name: 'lastName',
        type: 'string',
        _id: 'ca76aea83aa2be83adc4bab6',
      },
      {
        name: 'age',
        type: 'number',
        _id: 'eb1fcbfa88b8cee2c27f490e',
      },
      {
        name: 'owner',
        type: 'boolean',
        _id: 'b606b61e0efa4ff4ba2ef013',
      },
      {
        name: 'role',
        type: 'enumeratorMulti',
        _id: 'b606b61s0efa4ff4ba2sg013',
      },
    ],
  },
  {
    _id: 'aa6a8f9c2fb755b6e27ba247',
    name: 'bank',
    editing: false,
    showAttributes: false,
    showAddAttribute: false,
    attributes: [
      {
        name: '_id',
        type: 'string',
      },
      {
        name: 'name',
        type: 'string',
        _id: 'zca074198bf813e1e8be2ece',
      },
      {
        name: 'ceo',
        type: 'string',
        _id: 'zca174298bf813e1e8be2aaa',
      },
      {
        name: 'logoURL',
        type: 'string',
        _id: 'zca074198bf813e1e8be2aaa',
      },
      {
        name: 'creditRating',
        type: 'enumerator',
        _id: 'zca012398bf813e1e8be2aaa',
      },
      {
        name: 'employeeCount',
        type: 'integer',
        _id: 'zca012398bf813a1e1be2aaa',
      },
      {
        name: 'hq',
        type: 'string',
        _id: 'zzz012398bf813a1e1be2aaa',
      },
    ],
  },
  {
    _id: 'ae582a37cddcf0ddacc0cae4',
    name: 'branch',
    editing: false,
    showAttributes: false,
    showAddAttribute: false,
    attributes: [
      {
        name: '_id',
        type: 'string',
        isEditing: false,
        _id: 'b0f2f7fa94ce712eee4d3cf0',
      },
      {
        validators: [],
        name: 'location',
        type: 'string',
        _id: 'cabb1218d42fd18ff9cb2d4a',
      },
      {
        validators: [],
        name: 'phone',
        type: 'string',
        _id: 'aa5b68dc3e4eefb1164a5675',
      },
      {
        validators: [],
        name: 'manager',
        type: 'string',
        _id: '7adb46cfb173680888d7aaec',
      },
    ],
  },
  {
    _id: 'ad4e5f6dbf290efcdae0de1c',
    name: 'account',
    editing: false,
    showAttributes: false,
    showAddAttribute: false,
    attributes: [
      {
        name: '_id',
        type: 'string',
        isEditing: false,
        _id: 'e9b5c14d2bbaa7ab9e7edb90',
      },
      {
        validators: ['unique'],
        name: 'number',
        type: 'string',
        _id: 'c3cbb18fdbfd0ba2ea919ac4',
      },
      {
        validators: [],
        name: 'routingNumber',
        type: 'string',
        _id: 'e412ad67f135bd55abad6db5',
      },
      {
        validators: [],
        name: 'balance',
        type: 'decimal',
        _id: '14947cfba5a8f8404f4e02fd',
      },
      {
        validators: [],
        name: 'user',
        type: 'string',
        _id: 'd76ad86c04aaf6a459fdc4c7',
      },
    ],
  },
]
