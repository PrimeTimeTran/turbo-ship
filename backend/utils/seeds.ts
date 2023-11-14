import { faker } from '@faker-js/faker'

export const original = [
  {
    _id: faker.database.mongodbObjectId(),
    name: 'users',
    label: 'User',
    plural: 'Users',
    lowerPlural: 'users',
    showAttributes: true,
    showAddAttribute: false,
    attributes: [
      {
        name: '_id',
        type: 'string',
        editing: false,
        _id: faker.database.mongodbObjectId(),
      },
      {
        name: 'email',
        type: 'string',
        editing: false,
        _id: faker.database.mongodbObjectId(),
      },
      {
        name: 'firstName',
        type: 'string',
        editing: false,
        _id: faker.database.mongodbObjectId(),
      },
      {
        name: 'lastName',
        type: 'string',
        editing: false,
        _id: faker.database.mongodbObjectId(),
      },
      {
        name: 'age',
        type: 'number',
        editing: false,
        _id: faker.database.mongodbObjectId(),
      },
      {
        name: 'owner',
        type: 'boolean',
        editing: false,
        _id: faker.database.mongodbObjectId(),
      },
    ],
  },
  {
    _id: faker.database.mongodbObjectId(),
    name: 'wizards',
    label: 'Wizard',
    plural: 'Wizards',
    lowerPlural: 'wizards',
    showAttributes: true,
    showAddAttribute: false,
    attributes: [
      {
        name: '_id',
        type: 'string',
        editing: false,
        _id: faker.database.mongodbObjectId(),
      },
      {
        name: 'email',
        type: 'string',
        editing: false,
        _id: faker.database.mongodbObjectId(),
      },
      {
        name: 'firstName',
        type: 'string',
        editing: false,
        _id: faker.database.mongodbObjectId(),
      },
      {
        name: 'lastName',
        type: 'string',
        editing: false,
        _id: faker.database.mongodbObjectId(),
      },
      {
        name: 'age',
        type: 'number',
        editing: false,
        _id: faker.database.mongodbObjectId(),
      },
      {
        name: 'owner',
        type: 'boolean',
        editing: false,
        _id: faker.database.mongodbObjectId(),
      },
    ],
  },
]
