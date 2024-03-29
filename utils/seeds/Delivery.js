// https://www.bezkoder.com/mongodb-many-to-many-mongoose/#Mongoose_Many-to-Many_Relationship_example
export const Delivery = {
  server: 'nuxt',
  mobile: 'flutter',
  fbDev: {},
  fbProd: {},
  entities: [
    {
      _id: 'fb80c35deae8c1d25f4acbbd',
      name: 'user',
      plural: 'users',
      label: 'User',
      pluralL: 'Users',
      attributes: [
        { name: '_id', type: 'string', _id: '5f6ab0bbfb54cf51242ddb6a', validators: [], validations: [], label: '_id' },
        {
          name: 'email',
          type: 'string',
          _id: '0ca1c138ce4ddacdcbbc49d6',
          validators: ['email', 'unique'],
          validations: [],
          relation: { type: null, name: null },
          label: 'Email',
        },
        {
          name: 'firstName',
          type: 'string',
          _id: '5aab0a1efa84976ab3afea9e',
          validators: [],
          validations: [],
          relation: { type: null, name: null },
          label: 'FirstName',
        },
        {
          name: 'lastName',
          type: 'string',
          _id: '040e9eeeec2ae4eb4fd1946e',
          validators: [],
          validations: [],
          relation: { type: null, name: null },
          label: 'LastName',
        },
        {
          name: 'age',
          type: 'integer',
          _id: 'dcb9b448e5bce7c8bdea1ece',
          validators: [],
          validations: [],
          relation: { type: null, name: null },
          label: 'Age',
        },
        {
          name: 'status',
          type: 'enumerator',
          _id: '077cb5ead63ef967d1adcc2c',
          validators: [],
          validations: [],
          options: 'open,closed,pending',
          relation: { type: null, name: null },
          label: 'Status',
        },
        {
          validators: [],
          validations: [],
          name: 'avatarUrl',
          _id: '7cb7838708b53d78de6bfdee',
          relation: { type: null, name: null },
          type: 'string',
          label: 'AvatarUrl',
        },
        {
          validators: [],
          validations: [],
          name: 'city',
          _id: 'a3aef9ecb114efde29c0aed6',
          relation: { type: null, name: null },
          type: 'string',
          label: 'City',
        },
        {
          validators: [],
          validations: [],
          name: 'country',
          _id: 'fdbd3ba3d4f1bbbbc7cfcfca',
          relation: { type: null, name: null },
          type: 'string',
          label: 'Country',
        },
        {
          validators: [],
          validations: [],
          name: 'dob',
          _id: 'dae869bbcacb1ba1defc6ae1',
          relation: { type: null, name: null },
          type: 'date',
          label: 'Dob',
        },
        {
          validators: [],
          validations: [],
          name: 'status',
          _id: 'deaa69fd5793cf29f62da810',
          relation: { type: null, name: null },
          type: 'enumerator',
          options: 'pending,active,closed,deactivated,blocked',
          label: 'Status',
        },
        {
          validators: [],
          validations: [],
          name: 'username',
          _id: 'c16ee76ee14ce9f8c818dca3',
          relation: { type: null, name: null },
          type: 'string',
          label: 'Username',
        },
      ],
    },
    {
      name: 'location',
      label: 'Location',
      plural: 'locations',
      pluralL: 'Locations',
      attributes: [
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'address',
          _id: '46caf84d8cccec6fbaac16a0',
          relation: { type: null, name: null },
          label: 'Address',
        },
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'city',
          _id: '2cdd3b6a37ee61d690c7fc9d',
          relation: { type: null, name: null },
          label: 'City',
        },
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'state',
          _id: '5fa05a5e7e62a775fbceb6a5',
          relation: { type: null, name: null },
          label: 'State',
        },
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'country',
          _id: 'eca0a7c5508161d9bab2b0cc',
          relation: { type: null, name: null },
          label: 'Country',
        },
        {
          validators: [],
          validations: [],
          type: 'enumerator',
          name: 'type',
          _id: 'f6a7dbe3daaa3cdffcd5ff8e',
          relation: { type: null, name: null },
          label: 'Type',
        },
        {
          validators: [],
          validations: [],
          type: 'decimal',
          name: 'lat',
          _id: 'cfb9239ed358a6be1accc52f',
          relation: { type: null, name: null },
          label: 'Lat',
        },
        {
          validators: [],
          validations: [],
          type: 'decimal',
          name: 'long',
          _id: '81b4ef0dfc572bedfcdf5758',
          relation: { type: null, name: null },
          label: 'Long',
        },
      ],
      _id: 'a0078a5ffd2be26330a86ecb',
    },
    {
      name: 'vehicle',
      label: 'Vehicle',
      plural: 'vehicles',
      pluralL: 'Vehicles',
      attributes: [
        {
          validators: [],
          validations: [],
          type: 'enumerator',
          name: 'type',
          _id: '54a2bafac47ac1d2c3ef2cdd',
          relation: { type: null, name: null },
          label: 'Type',
        },
        {
          validators: [],
          validations: [],
          type: 'date',
          name: 'year',
          _id: 'c8c6e71107d6ded8f0c76563',
          relation: { type: null, name: null },
          label: 'Year',
        },
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'registrationNumber',
          _id: '59c28aae6ed7dbdbaae63cfe',
          relation: { type: null, name: null },
          label: 'RegistrationNumber',
        },
        {
          validators: [],
          validations: [],
          type: 'boolean',
          name: 'available',
          _id: 'ff32ddc8dcdad6d10cdf9a6a',
          relation: { type: null, name: null },
          label: 'Available',
        },
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'vinNumber',
          _id: 'db590840d4d44bdbeecdcf03',
          relation: { type: null, name: null },
          label: 'VinNumber',
        },
        {
          validators: [],
          validations: [],
          type: 'mto',
          name: 'owner',
          _id: '88a6ab5f4ffcf48ef29faa5f',
          relation: { type: null, name: null },
          label: 'Owner',
        },
      ],
      _id: '35a86bddc9ee690fb1e4b51c',
    },
    {
      name: 'order',
      label: 'Order',
      plural: 'orders',
      pluralL: 'Orders',
      attributes: [
        {
          validators: [],
          validations: [],
          type: 'enumerator',
          name: 'status',
          _id: '6ee639febfda1be192a1d9fb',
          relation: { type: null, name: null },
          label: 'Status',
        },
        {
          validators: [],
          validations: [],
          type: 'decimal',
          name: 'amount',
          _id: '5b5abd7bfce3c5678e99bf7a',
          relation: { type: null, name: null },
          label: 'Amount',
        },
        {
          validators: [],
          validations: [],
          type: 'mto',
          name: 'user',
          _id: 'd9ee5faaa5f173c9505fe9ef',
          relation: { type: null, name: null },
          label: 'User',
        },
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'addressPickup',
          _id: 'cbdb8c6d3fbdbb16f5d2b5fa',
          relation: { type: null, name: null },
          label: 'AddressPickup',
        },
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'addressDeliver',
          _id: '4fff62aeda3e161591de1165',
          relation: { type: null, name: null },
          label: 'AddressDeliver',
        },
        {
          validators: [],
          validations: [],
          type: 'mto',
          name: 'driver',
          _id: '4a1c1eac7aa6edeec5fdac90',
          relation: { type: null, name: null },
          label: 'Driver',
        },
        {
          validators: [],
          validations: [],
          type: 'mto',
          name: 'reviews',
          _id: 'ddfe9a4331d231c92365d40f',
          relation: { type: null, name: null },
          label: 'Reviews',
        },
      ],
      _id: '1f42829d96df886a45bd97a5',
    },
    {
      name: 'review',
      label: 'Review',
      plural: 'reviews',
      pluralL: 'Reviews',
      attributes: [
        {
          validators: [],
          validations: [],
          type: 'text',
          name: 'body',
          _id: 'dac6abd5a656beeb36cfcb65',
          relation: { type: null, name: null },
          label: 'Body',
        },
        {
          validators: [],
          validations: [],
          type: 'otm',
          name: 'order',
          _id: 'ef1c4a5bb6fab3dacba59c7d',
          relation: { type: null, name: null },
          label: 'Order',
        },
        {
          validators: [],
          validations: [],
          type: 'otm',
          name: 'user',
          _id: '55fcd5b3d3029b96fbeef3cc',
          relation: { type: null, name: null },
          label: 'User',
        },
        {
          validators: [],
          validations: [],
          type: 'enumerator',
          name: 'status',
          _id: 'c580ea5fc1bac7fdbe7bfafd',
          relation: { type: null, name: null },
          label: 'Status',
        },
        {
          validators: [],
          validations: [],
          type: 'decimal',
          name: 'rating',
          _id: 'a92ddbdb6c06a43cbfe5ccf5',
          relation: { type: null, name: null },
          label: 'Rating',
        },
      ],
      _id: '6fc85f27bfb410b2bd1eaffb',
    },
    {
      name: 'promotion',
      label: 'Promotion',
      plural: 'promotions',
      pluralL: 'Promotions',
      attributes: [
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'name',
          _id: '01ccbf6ebfe2e96e69aeeadd',
          relation: { type: null, name: null },
          label: 'Name',
        },
      ],
      _id: 'acea1ef5e5e05560dafbffbb',
    },
    {
      name: 'notification',
      label: 'Notification',
      plural: 'notifications',
      pluralL: 'Notifications',
      attributes: [
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'name',
          _id: 'aeafafbabcad8b1f6774ccce',
          relation: { type: null, name: null },
          label: 'Name',
        },
      ],
      _id: 'bb0a8e52bc04290cae3cf8be',
    },
    {
      name: 'business',
      label: 'Business',
      plural: 'businesses',
      pluralL: 'Businesses',
      attributes: [
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'name',
          _id: '163f6b630f40952bee2befc6',
          relation: { type: null, name: null },
          label: 'Name',
        },
        {
          validators: [],
          validations: [],
          type: 'mto',
          name: 'owner',
          _id: '8c2d762fdb5cd3aa33a6f45a',
          relation: { type: null, name: null },
          label: 'Owner',
        },
        {
          validators: [],
          validations: [],
          type: 'enumerator',
          name: 'type',
          _id: 'fc91c0ddce8b686e58e79c73',
          relation: { type: null, name: null },
          label: 'Type',
        },
      ],
      _id: '1d33e752935abedeed1eed3a',
    },
  ],
}
