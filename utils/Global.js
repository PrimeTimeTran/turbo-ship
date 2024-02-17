import _ from 'lodash'
import { ClockIcon, ChartPieIcon, UserGroupIcon } from '@heroicons/vue/20/solid'

export class GlobalState {
  static name = 'Name'
  static entityNames = [
    'auditlogs',
    'users',
    'accounts',
    'transactions',
    'banks',
    'branches',
    'messages',
    'products',
    'referrals',
    'wizards',
    'foos',
  ]
  static formSortedFields(entityName) {
    // Sort fields => primitives, enums, relations
    const thisEntity = this.entities[entityName]
    let attributes = Object.keys(thisEntity).filter((a) => a !== '_id')
    attributes = Object.entries(thisEntity)
      .map(([k, v]) => ({ name: k, ...v }))
      .filter((a) => a.name !== '_id')
    attributes = Type.sortOnType(attributes)
    return attributes
  }
  static entityCols(entityName) {
    // Turbo:
    // In the Admin dashboard we want the ellipsis & checkbox columns to be on the
    // far left of each resources table.
    // Sort cols => primitives, enums, relations
    // Add empty & _id cols to the start for ellipsis & checkbox respectively
    let resource = this.entities[entityName]
    let attributes = Object.keys(resource).filter((a) => a !== '_id')
    attributes = Object.entries(resource)
      .map(([k, v]) => ({ name: k, ...v }))
      .filter((a) => a.name !== '_id')
    attributes = Type.sortOnType(attributes)
    return [{ name: '', type: '' }, { name: '_id', type: 'string' }, ...attributes]
  }
  static sidebar = [
    { path: 'dashboard', label: 'Dashboard', icon: ChartPieIcon },
    { path: 'auditlogs', label: 'Audit Logs', icon: ClockIcon },
    { path: 'users', label: 'Users', icon: UserGroupIcon },
    { path: 'accounts', label: 'Accounts' },
    { path: 'transactions', label: 'Transactions' },
    { path: 'banks', label: 'Banks' },
    { path: 'branches', label: 'Branches' },
    { path: 'messages', label: 'Messages' },
    { path: 'products', label: 'Products' },
    { path: 'referrals', label: 'Referrals' },
    { path: 'wizards', label: 'Wizards' },
    { path: 'foos', label: 'Foos' },
  ]
  static entities = {
    wizards: {
      email: {
        type: 'string',
        label: 'email',
        placeholder: '',
      },
      firstName: {
        type: 'string',
        label: 'firstName',
        placeholder: '',
      },
      lastName: {
        type: 'string',
        label: 'lastName',
        placeholder: '',
      },
      dob: {
        type: 'string',
        label: 'dob',
        placeholder: '',
      },
      location: {
        type: 'map',
        label: 'location',
        placeholder: '',
      },
      jobTitle: {
        type: 'string',
        label: 'jobTitle',
        placeholder: '',
      },
      industry: {
        type: 'string',
        label: 'industry',

        placeholder: '',
      },
      patronus: {
        type: 'enumerator',
        label: 'patronus',

        placeholder: 'a,b,c,d,e',
        options: ['a', 'b', 'c', 'd', 'e'],
      },
      potions: {
        type: 'decimal',
        label: 'potions',

        placeholder: '',
      },
      charms: {
        type: 'string',
        label: 'charms',

        placeholder: '',
      },
      dada: {
        type: 'string',
        label: 'dada',

        placeholder: '',
      },
      sex: {
        type: 'string',
        label: 'sex',

        placeholder: '',
      },
      avatarUrl: {
        type: 'string',
        label: 'avatarUrl',

        placeholder: '',
      },
      topSpells: {
        type: 'enumeratorMulti',
        label: 'topSpells',

        placeholder: 'jinxes, hexes, charms, curses, spells, counters, healing, transfigurations',
        options: ['charms', 'counters', 'curses', 'healing', 'hexes', 'spells', 'transfigurations', 'jinxes'],
      },
      bookAppearances: {
        type: 'enumerator',
        label: 'bookAppearances',

        placeholder: '1,2,3,4,5,6,7,8',
        options: ['1', '2', '3', '4', '5', '6', '7', '8'],
      },
      house: {
        type: 'enumerator',
        label: 'house',

        placeholder: '',
        options: ['hufflepuff', 'ravenclaw', 'slytherin', 'unknown', 'gryffindor'],
      },
    },
    foos: {
      fooBoolean: {
        type: 'boolean',
        label: 'Foo Boolean',

        placeholder: 'foo boolean placeholder',
      },
      fooString: {
        type: 'string',
        label: 'Foo String',

        placeholder: 'foo string placeholder',
      },
      fooText: {
        type: 'text',
        label: 'Foo Text',

        placeholder: 'foo text placeholder',
      },
      fooInteger: {
        type: 'integer',
        label: 'Foo Integer',

        placeholder: 'foo integer placeholder',
      },
      fooDecimal: {
        type: 'decimal',
        label: 'Foo Decimal',

        placeholder: 'foo decimal placeholder',
      },
      fooDate: {
        type: 'date',
        label: 'Foo Date',

        placeholder: 'foo date placeholder',
      },
      fooDateTime: {
        type: 'dateTime',
        label: 'Foo Date Time',

        placeholder: 'foo datetime placeholder',
      },
      fooArray: {
        type: 'array',
        label: 'Foo Array',

        placeholder: 'foo array placeholder',
      },
      fooMap: {
        type: 'map',
        label: 'Foo Map',

        placeholder: 'foo map placeholder',
      },
      fooEnumerator: {
        type: 'enumerator',
        label: 'Foo Enumerator',

        placeholder: 'a,b,c,',
        options: ['a', 'b', 'c'],
      },
      foodEnumeratorMulti: {
        type: 'enumeratorMulti',
        label: 'Foo Enum Multi',

        placeholder: 'a,b,c',
        options: ['a', 'b', 'c'],
      },
      fooOTM: {
        type: 'relation',
        label: 'Foo OTM',
        relation: 'otm',
        placeholder: 'one-to-many',
      },
      fooMTO: {
        type: 'relation',
        label: 'Foo MTO',
        relation: 'mto',
        placeholder: 'many-to-one',
      },
      fooOTO: {
        type: 'relation',
        label: 'Foo OTO',
        relation: 'oto',
        placeholder: 'one-to-one',
      },
      fooMTM: {
        type: 'relation',
        label: 'Foo MTM',
        relation: 'mtm',
        placeholder: 'many-to-many',
      },
    },
    users: {
      status: {
        type: 'enumerator',
        label: 'Status',

        placeholder: 'pending,open,closed',
        options: ['closed', 'open', 'pending'],
      },
      standing: {
        type: 'enumerator',
        label: 'Standing',

        placeholder: 'current,behind',
        options: ['behind', 'current'],
      },
      email: {
        type: 'string',
        label: 'Email',

        placeholder: 'john@email.com',
      },
      phone: {
        type: 'string',
        label: 'Phone',

        placeholder: '88-888-8888',
      },
      firstName: {
        type: 'string',
        label: 'First Name',

        placeholder: 'John',
      },
      lastName: {
        type: 'string',
        label: 'Last Name',

        placeholder: 'Doe ',
      },
      phone: {
        type: 'string',
        label: 'Phone',

        placeholder: '777-777-7777',
      },
      role: {
        type: 'enumeratorMulti',
        label: 'Role',

        placeholder: 'customer, employee, admin',
        options: ['admin', 'customer', 'owner', 'staff'],
      },
      banks: {
        type: 'relation',
        label: 'Banks',
        relation: 'otm',
        placeholder: '',
      },
      branches: {
        type: 'relation',
        label: 'Branches',
        relation: 'otm',
        placeholder: '',
      },
      accounts: {
        type: 'relation',
        label: 'Accounts',
        relation: 'otm',
        placeholder: '',
      },
      transactions: {
        type: 'relation',
        label: 'Transactions',
        relation: 'otm',
        placeholder: '',
      },
      age: {
        type: 'integer',
        label: 'Age',
        placeholder: '18',
      },
      owner: {
        type: 'boolean',
        label: 'Owner',
        placeholder: 'true',
      },
      netWorth: {
        type: 'decimal',
        label: 'NetWorth',
        placeholder: '$88,888,888',
      },
      messages: {
        type: 'relation',
        label: 'Messages',
        relation: 'otm',
        placeholder: '',
      },
      _id: {
        type: 'string',
        label: '_id',

        placeholder: '',
      },
    },
    accounts: {
      user: {
        type: 'relation',
        label: 'User',
        relation: 'mto',
        placeholder: 'john@gmail.com',
      },
      _id: {
        type: 'string',
        label: '_id',

        placeholder: '',
      },
      balance: {
        type: 'decimal',
        label: 'Balance',

        placeholder: '$88,888',
      },
      bank: {
        type: 'relation',
        label: 'Bank',
        relation: 'mto',
        placeholder: 'Bank of America',
      },
      transactions: {
        type: 'relation',
        label: 'Transactions',
        relation: 'otm',
        placeholder: '',
      },
      type: {
        type: 'enumerator',
        label: 'Type',

        placeholder: 'checking, savings, credit...',
        options: ['auto', 'banking', 'checking', 'credit', 'home', 'investing', 'savings'],
      },
      accountNumber: {
        type: 'string',
        label: 'Account Number',

        placeholder: '88888888',
      },
      routingNumber: {
        type: 'string',
        label: 'Routing Number',

        placeholder: '8888-8888',
      },
      branch: {
        type: 'relation',
        label: 'Branch',
        relation: 'mto',
        placeholder: 'Downtown',
      },
    },
    transactions: {
      _id: {
        type: 'string',
        label: '_id',

        placeholder: '',
      },
      amount: {
        type: 'decimal',
        label: 'Amount',

        placeholder: '',
      },
      status: {
        type: 'enumerator',
        label: 'Status',

        placeholder: 'processing,complete,declined,cancelled,rejected',
        options: ['cancelled', 'complete', 'declined', 'processing', 'rejected'],
      },
      chargeDate: {
        type: 'dateTime',
        label: 'Charge Date',

        placeholder: '12/02/23',
      },
      description: {
        type: 'string',
        label: 'Description',

        placeholder: 'Description...',
      },
      user: {
        type: 'relation',
        label: 'User',
        relation: 'mto',
        placeholder: 'User...',
      },
      account: {
        type: 'relation',
        label: 'Account',
        relation: 'mto',
        placeholder: '',
      },
      branch: {
        type: 'relation',
        label: 'Branch',
        relation: 'mto',
        placeholder: '',
      },
      bank: {
        type: 'relation',
        label: 'Bank',
        relation: 'mto',
        placeholder: '',
      },
    },
    banks: {
      _id: {
        type: 'string',
        label: '_id',

        placeholder: '',
      },
      name: {
        type: 'string',
        label: 'Name',

        placeholder: 'Bank of America',
      },
      ceo: {
        type: 'string',
        label: 'CEO',

        placeholder: 'Brian Moynihan',
      },
      founded: {
        type: 'date',
        label: 'Founded',

        placeholder: '7/22/1887',
      },
      phone: {
        type: 'string',
        label: 'Phone',

        placeholder: '88-888-8888',
      },
      email: {
        type: 'string',
        label: 'Email',

        placeholder: 'info@bank.com',
      },
      description: {
        type: 'text',
        label: 'Description',

        placeholder: 'Description...',
      },
      logoURL: {
        type: 'string',
        label: 'LogoURL',

        placeholder: 'http://logo.bankofamerica.com',
      },
      creditRating: {
        type: 'enumerator',
        label: 'CreditRating',

        placeholder: 'A',
        options: ['a', 'b', 'c', 'd', 'f'],
      },
      employeeCount: {
        type: 'integer',
        label: 'EmployeeCount',

        placeholder: '217,000',
      },
      hq: {
        type: 'string',
        label: 'HQ',

        placeholder: 'Charlotte, North Carolina',
      },
      branches: {
        type: 'relation',
        label: 'Branches',
        relation: 'otm',
        placeholder: '3,900',
      },
      accounts: {
        type: 'relation',
        label: 'Accounts',
        relation: 'otm',
        placeholder: '69M',
      },
      users: {
        type: 'relation',
        label: 'Users',
        relation: 'otm',
        placeholder: '69M',
      },
      transactions: {
        type: 'relation',
        label: 'Transactions',
        relation: 'otm',
        placeholder: '',
      },
    },
    branches: {
      _id: {
        type: 'string',
        label: '_id',

        placeholder: '',
      },
      location: {
        type: 'map',
        label: 'Location',

        placeholder: '',
      },
      opened: {
        type: 'date',
        label: 'Opened',

        placeholder: '',
      },
      phone: {
        type: 'string',
        label: 'Phone',

        placeholder: '',
      },
      description: {
        type: 'text',
        label: 'Description',

        placeholder: '',
      },
      manager: {
        type: 'map',
        label: 'Manager',

        placeholder: '',
      },
      accounts: {
        type: 'relation',
        label: 'Accounts',
        relation: 'otm',
        placeholder: '',
      },
      users: {
        type: 'relation',
        label: 'Users',
        relation: 'otm',
        placeholder: '',
      },
      transactions: {
        type: 'relation',
        label: 'Transactions',
        relation: 'otm',
        placeholder: '',
      },
      bank: {
        type: 'relation',
        label: 'Bank',
        relation: 'mto',
        placeholder: '',
      },
    },
    messages: {
      body: {
        type: 'string',
        label: 'Body',

        placeholder: '',
      },
      user: {
        type: 'relation',
        label: 'User',
        relation: 'mto',
        placeholder: '',
      },
    },
    products: {
      companyUrl: {
        type: 'string',
        label: 'CompanyUrl',

        placeholder: 'http://company.com',
      },
      type: {
        type: 'enumerator',
        label: 'Type',

        placeholder: 'bank,hedgeFund,diversified',
        options: ['bank', 'diversified', 'hedgeFund'],
      },
      title: {
        type: 'string',
        label: 'Title',

        placeholder: '50% off...',
      },
      imageUrl: {
        type: 'string',
        label: 'ImageUrl',

        placeholder: 'https://deal.company.com',
      },
      linkForm: {
        type: 'string',
        label: 'LinkForm',

        placeholder: 'https://deal.company.com?form=true',
      },
      linkTerms: {
        type: 'string',
        label: 'LinkTerms',

        placeholder: 'https://deal.company.com?terms=true',
      },
      linkDisclosure: {
        type: 'string',
        label: 'LinkDisclosure',

        placeholder: 'https://deal.company.com?disclosure=true',
      },
      description: {
        type: 'string',
        label: 'Description',

        placeholder: 'A great deal because...',
      },
      meta: {
        type: 'string',
        label: 'Meta',
        placeholder: 'A great deal because...',
      },
      insuranceType: {
        type: 'enumerator',
        label: 'InsuranceType',

        placeholder: 'car,home,health,life',
        options: ['car', 'health', 'home', 'life'],
      },
      linkInsuranceQuote: {
        type: 'string',
        label: 'LinkInsuranceQuote',
        placeholder: 'https://deal.company.com?quote=true',
      },
    },
    referrals: {
      referrer: {
        type: 'relation',
        label: 'referrer',
        relation: 'mto',
        placeholder: 'placeholder...',
      },
      referee: {
        type: 'relation',
        label: 'referee',
        relation: 'mto',
        placeholder: 'placeholder...',
      },
    },
  }
}
