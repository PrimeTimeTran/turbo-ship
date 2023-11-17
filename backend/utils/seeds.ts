export interface Entity {
  _id: string
  name: string
  label: string
  plural: string
  pluralSM: string
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
    _id: 'e0237842035dd5359ffdde24',
    name: 'user',
    pluralSM: 'users',
    label: 'User',
    plural: 'Users',
    showAttributes: false,
    showAttributeForm: false,
    attributes: [
      { name: '_id', type: 'string', _id: 'd25ba6acb588e8ed3dd87e42' },
      { name: 'email', type: 'string', _id: '3170ec0fad551ad9bd644d5e' },
      { name: 'firstName', type: 'string', _id: 'f82f5fbcd87b643671acbb7d' },
      { name: 'lastName', type: 'string', _id: 'caf7bdb6fdefcadec26e733f' },
      { name: 'age', type: 'number', _id: 'dc9bbaa64f0ffbe1b472032c' },
      { name: 'status', type: 'enumerator', _id: 'eab0ebc903a8842be527febb' },
      { name: 'owner', type: 'boolean', _id: '111285afa0e8e306ba0cedef' },
      {
        name: 'role',
        type: 'enumeratorMulti',
        _id: '0ee72eed6ad6fe4ede60208e',
      },
    ],
  },
  {
    _id: 'de4c9a4d1d1bbfac83447fed',
    name: 'bank',
    pluralSM: 'banks',
    label: 'Bank',
    plural: 'Banks',
    showAttributes: false,
    showAttributeForm: false,
    attributes: [
      { name: '_id', type: 'string', _id: 'be0af5fe18b923e9d85e29be' },
      { name: 'name', type: 'string', _id: 'ea0cc9afbadd28c6295dca4b' },
      { name: 'ceo', type: 'string', _id: 'c0e14aca13f894914e95a225' },
      { name: 'logoURL', type: 'string', _id: 'fb317df771ba0fa4aedbd8d8' },
      {
        name: 'creditRating',
        type: 'enumerator',
        _id: 'fdaadcf8d24880097edcc5ea',
      },
      {
        name: 'employeeCount',
        type: 'integer',
        _id: 'df8ecacb229dbaa2fccfc0af',
      },
      { name: 'hq', type: 'string', _id: '21d8e2c200f0dcbdb4b1aa36' },
    ],
  },
  {
    _id: 'bfdbe15fab99f9bafd8efb00',
    name: 'branch',
    pluralSM: 'branches',
    label: 'Branch',
    plural: 'Branches',
    showAttributes: false,
    showAttributeForm: false,
    attributes: [
      { name: '_id', type: 'string', _id: 'fce7b08f1aab7bd523aa8cca' },
      { name: 'location', type: 'string', _id: '2b0eb3cc0ff387933a874adf' },
      { name: 'phone', type: 'string', _id: '4d4f93eeb9e7b7d9def04aa1' },
      { name: 'manager', type: 'string', _id: '39d05127a06cb590daea5f32' },
    ],
  },
]
