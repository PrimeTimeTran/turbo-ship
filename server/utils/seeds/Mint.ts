export const Mint: Entity[] = [
  {
    _id: 'fb80c35deae8c1d25f4acbbd',
    name: 'user',
    plural: 'users',
    label: 'User',
    pluralL: 'Users',
    attributes: [
      {
        validators: [],
        name: 'accounts',
        type: 'relation',
        _id: 'ebed2ca23c6cc7f44afff397',
        validations: [],
        relation: { type: 'otm', name: 'account' },
      },
      {
        name: 'status',
        type: 'enumerator',
        _id: '077cb5ead63ef967d1adcc2c',
        validators: [],
        validations: [],
        options: 'open,closed,pending',
        relation: { type: null, name: null },
      },
      {
        validators: [],
        name: 'transactions',
        type: 'relation',
        _id: '16dfc8bb206be2feaa2c6f04',
        validations: [],
        relation: { type: 'otm', name: 'transaction' },
      },
      {
        validators: [],
        name: 'banks',
        type: 'relation',
        _id: 'd6db8ffc08aaed0ee2c9d8ce',
        validations: [],
        relation: { type: 'otm', name: 'bank' },
      },
      {
        name: 'email',
        type: 'string',
        _id: '0ca1c138ce4ddacdcbbc49d6',
        validators: ['email', 'unique'],
        validations: [],
        relation: { type: null, name: null },
      },
      {
        name: 'firstName',
        type: 'string',
        _id: '5aab0a1efa84976ab3afea9e',
        validators: [],
        validations: [],
        relation: { type: null, name: null },
      },
      {
        name: 'lastName',
        type: 'string',
        _id: '040e9eeeec2ae4eb4fd1946e',
        validators: [],
        validations: [],
        relation: { type: null, name: null },
      },
      {
        name: 'age',
        type: 'number',
        _id: 'dcb9b448e5bce7c8bdea1ece',
        validators: [],
        validations: [],
        relation: { type: null, name: null },
      },
      {
        name: 'owner',
        type: 'boolean',
        _id: 'd3acf997e55592abc2c774d1',
        validators: [],
        validations: [],
        relation: { type: null, name: null },
      },
      {
        name: 'role',
        type: 'enumeratorMulti',
        _id: '7f3711fe5bcb2efde166c758',
        validators: [],
        validations: [],
        options: 'owner,admin,staff,customer',
        relation: { type: null, name: null },
      },
      {
        validators: [],
        name: 'netWorth',
        type: 'decimal',
        _id: '6f5beab03b55eedac8e92a38',
        validations: [],
        relation: { type: null, name: null },
      },
      {
        valid: false,
        validators: [],
        validations: [],
        name: 'messages',
        type: 'relation',
        _id: '5df7f9807cf4d62f17b0b9af',
        relation: { type: 'otm', name: 'message' },
      },
      {
        name: '_id',
        type: 'string',
        _id: '5f6ab0bbfb54cf51242ddb6a',
        validators: [],
        validations: [],
      },
    ],
  },
  {
    _id: '9bb6eaefd16bcaadbadb6064',
    name: 'account',
    plural: 'accounts',
    label: 'Account',
    pluralL: 'Accounts',
    attributes: [
      {
        validators: [],
        name: 'user',
        type: 'relation',
        _id: 'ebed2ca23c6cc8f44afff397',
        validations: [],
        relation: { type: 'mto', name: 'user' },
      },
      {
        name: '_id',
        type: 'string',
        _id: '3a1fa3ceb681ccd0bfa9ffbf',
        validators: [],
        validations: [],
      },
      {
        validators: [],
        name: 'balance',
        type: 'decimal',
        _id: '1fcb66bc9bfffdff5cb2a4d0',
        validations: [],
        relation: { type: null, name: null },
      },
      {
        validators: [],
        name: 'bank',
        type: 'relation',
        relation: { type: 'mto', name: 'bank' },
        _id: 'b918f9d4301d7fa9f8ffc5cd',
        validations: [],
      },
      {
        validators: [],
        name: 'transactions',
        type: 'relation',
        relation: { type: 'otm', name: 'transaction' },
        _id: '3fbbaa1f2f3b78c1cc6e8930',
        validations: [],
      },
      {
        validators: [],
        name: 'status',
        type: 'enumerator',
        _id: '92be01a9105eac235b70cc89',
        validations: [],
        relation: { type: null, name: null },
      },
      {
        validators: [],
        name: 'type',
        type: 'enumerator',
        _id: 'fadc5faabe70daffd3b53ddd',
        validations: [],
        relation: { type: null, name: null },
      },
      {
        validators: [],
        name: 'number',
        type: 'string',
        _id: 'e94b64fd360d25f8335ba9bb',
        validations: [],
        relation: { type: null, name: null },
      },
      {
        validators: [],
        name: 'routingNumber',
        type: 'string',
        _id: 'a42ede376f3edf8e23dc685e',
        validations: [],
        relation: { type: null, name: null },
      },
      {
        validators: [],
        name: 'branch',
        type: 'relation',
        _id: '3b1a2f8bdf4426ab3ac1d4fc',
        validations: [],
        relation: { type: 'mto', name: 'branch' },
      },
    ],
  },
  {
    _id: 'dc01d49b61bcb3208597d9e1',
    name: 'transaction',
    plural: 'transactions',
    label: 'Transaction',
    pluralL: 'Transactions',
    attributes: [
      {
        name: '_id',
        type: 'string',
        _id: 'b8eccaecb1ac1e8725efec2b',
        validators: [],
        validations: [],
      },
      {
        validators: [],
        name: 'amount',
        type: 'decimal',
        _id: 'f66fd03735b45cad81d42d88',
        validations: [],
        relation: { type: null, name: null },
      },
      {
        validators: [],
        name: 'status',
        type: 'enumerator',
        _id: '0ec5c1e2cfbb99fe37a844e7',
        validations: [],
        relation: { type: null, name: null },
      },
      {
        validators: [],
        name: 'chargeDate',
        type: 'dateTime',
        _id: 'b5b16d729dbbd5e6c87807be',
        validations: [],
        relation: { type: null, name: null },
      },
      {
        validators: [],
        name: 'description',
        type: 'string',
        _id: 'dbcd9fd9b6e64f52f07bf8dc',
        validations: [],
        relation: { type: null, name: null },
      },
      {
        validators: [],
        name: 'user',
        type: 'relation',
        relation: { type: 'mto', name: 'user' },
        _id: 'a51f1f44e1bcb61b32d3bdcc',
        validations: [],
      },
      {
        validators: [],
        name: 'account',
        type: 'relation',
        relation: { type: 'mto', name: 'account' },
        _id: 'acff83fa7aeae96c6d0b7a1c',
        validations: [],
      },
      {
        validators: [],
        name: 'branch',
        type: 'relation',
        relation: { type: 'mto', name: 'branch' },
        _id: 'ce0ffe8cfedbb01fa2f5dc3f',
        validations: [],
      },
      {
        validators: [],
        name: 'bank',
        type: 'relation',
        relation: { type: 'mto', name: 'bank' },
        _id: '984e2fb0aefbdf9ca7f280ef',
        validations: [],
      },
    ],
  },
  {
    _id: 'b4ba1f8610fd6c5badf0dd1e',
    name: 'bank',
    plural: 'banks',
    label: 'Bank',
    pluralL: 'Banks',
    attributes: [
      {
        name: '_id',
        type: 'string',
        _id: 'd726f6c6ae9dbeb8f8c5fc04',
        validators: [],
        validations: [],
      },
      {
        name: 'name',
        type: 'string',
        _id: 'b429c7ca7c60c1d3acf70a07',
        validators: [],
        validations: [],
        relation: { type: null, name: null },
      },
      {
        name: 'ceo',
        type: 'string',
        _id: 'c2fcbdfd2a570dee19e5cbc4',
        validators: [],
        validations: [],
        relation: { type: null, name: null },
      },
      {
        name: 'logoURL',
        type: 'string',
        _id: 'b01fef20c7b5fad7a52edeb9',
        validators: [],
        validations: [],
        relation: { type: null, name: null },
      },
      {
        name: 'creditRating',
        type: 'enumerator',
        _id: '2fc2d0ecbfc2eece4b50483f',
        validators: [],
        validations: [],
        relation: { type: null, name: null },
      },
      {
        name: 'employeeCount',
        type: 'integer',
        _id: '2f28df15db67f30bd57fbe35',
        validators: [],
        validations: [],
        relation: { type: null, name: null },
      },
      {
        name: 'hq',
        type: 'string',
        _id: 'd1bb0e69bfe5cbdd28da0224',
        validators: [],
        validations: [],
        relation: { type: null, name: null },
      },
      {
        validators: [],
        name: 'branches',
        type: 'relation',
        relation: { type: 'otm', name: 'branch' },
        _id: '67041d6acede08e4eae8cb33',
        validations: [],
      },
      {
        validators: [],
        name: 'accounts',
        type: 'relation',
        relation: { type: 'otm', name: 'account' },
        _id: '5c8ebbce5f1cd7add8fbbaf3',
        validations: [],
      },
      {
        validators: [],
        name: 'users',
        type: 'relation',
        relation: { type: 'otm', name: 'user' },
        _id: 'c17fab9cec56ab42a572fa13',
        validations: [],
      },
      {
        validators: [],
        name: 'transactions',
        type: 'relation',
        relation: { type: 'otm', name: 'user' },
        _id: '91c0354c89aad627bad7ee81',
        validations: [],
      },
    ],
  },
  {
    _id: '32b344ad5e0cfb2645b02f3b',
    name: 'branch',
    plural: 'branches',
    label: 'Branch',
    pluralL: 'Branches',
    attributes: [
      {
        name: '_id',
        type: 'string',
        _id: 'befac3c44322aae773fe0c8d',
        validators: [],
        validations: [],
      },
      {
        name: 'location',
        type: 'string',
        _id: '8131cbecd9b0fb15389a08e9',
        validators: [],
        validations: [],
        relation: { type: null, name: null },
      },
      {
        name: 'phone',
        type: 'string',
        _id: 'da44f2172c348baf28fdbdb9',
        validators: [],
        validations: [],
        relation: { type: null, name: null },
      },
      {
        name: 'manager',
        type: 'string',
        _id: '1a9d88efaf779855cd89fcf4',
        validators: [],
        validations: [],
        relation: { type: null, name: null },
      },
      {
        validators: [],
        name: 'accounts',
        type: 'relation',
        relation: { type: 'otm', name: 'account' },
        _id: '0d4a88ee4eecabfb510fbaff',
        validations: [],
      },
      {
        validators: [],
        name: 'users',
        type: 'relation',
        relation: { type: 'otm', name: 'user' },
        _id: 'e7d4fd7aebca50aa19cf4a90',
        validations: [],
      },
      {
        validators: [],
        name: 'transactions',
        type: 'relation',
        relation: { type: 'otm', name: 'transaction' },
        _id: 'bcccb89665db4cc3dbdc9702',
        validations: [],
      },
      {
        validators: [],
        name: 'bank',
        type: 'relation',
        relation: { type: 'mto', name: 'bank' },
        _id: 'f7939e9ecaeefedeac928e92',
        validations: [],
      },
    ],
  },
  {
    _id: '57dbd2eb064c0d9ac7fc47a4',
    name: 'message',
    plural: 'messages',
    label: 'Message',
    pluralL: 'Messages',
    attributes: [
      {
        _id: '578595c0b641fd6583b42f78',
        name: 'body',
        type: 'string',
        validators: [],
        validations: [],
        relation: { type: null, name: null },
      },
      {
        validators: [],
        validations: [],
        type: 'relation',
        relation: { type: 'mto', name: 'user' },
        name: 'user',
        _id: '23da767f77e3c87f05df80ce',
      },
    ],
  },
]
