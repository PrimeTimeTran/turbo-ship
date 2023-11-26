// https://www.bezkoder.com/mongodb-many-to-many-mongoose/#Mongoose_Many-to-Many_Relationship_example
export const Delivery: Entity[] = [
  {
    _id: 'fb80c35deae8c1d25f4acbbd',
    name: 'user',
    plural: 'users',
    label: 'User',
    pluralL: 'Users',
    attributes: [
      {
        name: '_id',
        type: 'string',
        _id: '5f6ab0bbfb54cf51242ddb6a',
        validators: [],
        validations: [],
      },
      {
        name: 'email',
        type: 'string',
        _id: '0ca1c138ce4ddacdcbbc49d6',
        validators: ['email', 'unique'],
        validations: [],
      },
      {
        name: 'firstName',
        type: 'string',
        _id: '5aab0a1efa84976ab3afea9e',
        validators: [],
        validations: [],
      },
      {
        name: 'lastName',
        type: 'string',
        _id: '040e9eeeec2ae4eb4fd1946e',
        validators: [],
        validations: [],
      },
      {
        name: 'age',
        type: 'number',
        _id: 'dcb9b448e5bce7c8bdea1ece',
        validators: [],
        validations: [],
      },
      {
        name: 'status',
        type: 'enumerator',
        _id: '077cb5ead63ef967d1adcc2c',
        validators: [],
        validations: [],
        options: 'open,closed,pending',
      },
      {
        validators: [],
        validations: [],
        name: 'avatarUrl',
        _id: '7cb7838708b53d78de6bfdee',
        relation: { type: null, name: null },
        type: 'string',
      },
      {
        validators: [],
        validations: [],
        name: 'city',
        _id: 'a3aef9ecb114efde29c0aed6',
        relation: { type: null, name: null },
        type: 'string',
      },
      {
        validators: [],
        validations: [],
        name: 'country',
        _id: 'fdbd3ba3d4f1bbbbc7cfcfca',
        relation: { type: null, name: null },
        type: 'string',
      },
      {
        validators: [],
        validations: [],
        name: 'dob',
        _id: 'dae869bbcacb1ba1defc6ae1',
        relation: { type: null, name: null },
        type: 'date',
      },
      {
        validators: [],
        validations: [],
        name: 'status',
        _id: 'deaa69fd5793cf29f62da810',
        relation: { type: null, name: null },
        type: 'enumerator',
        options: 'pending,active,closed,deactivated,blocked',
      },
      {
        validators: [],
        validations: [],
        name: 'username',
        _id: 'c16ee76ee14ce9f8c818dca3',
        relation: { type: null, name: null },
        type: 'string',
      },
    ],
  },
]