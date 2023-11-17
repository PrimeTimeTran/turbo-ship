export interface Entity {
  _id: string
  name: string
  label: string
  plural: string
  lowerPlural: string
  showAttributes: boolean
  showAttributeForm: boolean
  attributes: Attribute[]
}

export interface Attribute {
  name: string
  type: string
  _id: string
}

export const original: Entity[] = [
  {
    _id: 'ca2f49aeb624adea4e98e491',
    name: 'user',
    lowerPlural: 'users',
    label: 'User',
    plural: 'Users',
    showAttributes: false,
    showAttributeForm: false,
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
        name: 'status',
        type: 'enumerator',
        _id: 'eb1fcbfa11b1cee2c27f490e',
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
    lowerPlural: 'banks',
    label: 'Bank',
    plural: 'Banks',
    showAttributes: false,
    showAttributeForm: false,
    attributes: [
      {
        name: '_id',
        type: 'string',
        _id: 'zca074198bf813e1e8be2ece',
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
    lowerPlural: 'branches',
    label: 'Branch',
    plural: 'Branches',
    showAttributes: false,
    showAttributeForm: false,
    attributes: [
      {
        name: '_id',
        type: 'string',
        _id: 'b0f2f7fa94ce712eee4d3cf0',
      },
      {
        name: 'location',
        type: 'string',
        _id: 'cabb1218d42fd18ff9cb2d4a',
      },
      {
        name: 'phone',
        type: 'string',
        _id: 'aa5b68dc3e4eefb1164a5675',
      },
      {
        name: 'manager',
        type: 'string',
        _id: '7adb46cfb173680888d7aaec',
      },
    ],
  },
]
