import _ from 'lodash'
import { ClockIcon, ChartPieIcon, UserGroupIcon } from '@heroicons/vue/20/solid'

export class GlobalState {
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
  ]
  static entityCols(entityName) {
    // Sort cols => primitives, enums, relations
    // Add empty & _id cols to the start for ellipsis & checkbox respectively
    let thisEntity = this.entities[entityName]
    let attributes = Object.keys(thisEntity).filter((a) => a !== '_id')
    attributes = Object.entries(thisEntity)
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
  ]
  static entities = {
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
        placeholder: '',
      },
      branches: {
        type: 'relation',
        label: 'Branches',
        placeholder: '',
      },
      accounts: {
        type: 'relation',
        label: 'Accounts',
        placeholder: '',
      },
      transactions: {
        type: 'relation',
        label: 'Transactions',
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
        placeholder: 'Bank of America',
      },
      transactions: {
        type: 'relation',
        label: 'Transactions',
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
        label: 'RoutingNumber',
        placeholder: '8888-8888',
      },
      branch: {
        type: 'relation',
        label: 'Branch',
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
        placeholder: 'User...',
      },
      account: {
        type: 'relation',
        label: 'Account',
        placeholder: '',
      },
      branch: {
        type: 'relation',
        label: 'Branch',
        placeholder: '',
      },
      bank: {
        type: 'relation',
        label: 'Bank',
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
        placeholder: '3,900',
      },
      accounts: {
        type: 'relation',
        label: 'Accounts',
        placeholder: '69M',
      },
      users: {
        type: 'relation',
        label: 'Users',
        placeholder: '69M',
      },
      transactions: {
        type: 'relation',
        label: 'Transactions',
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
        placeholder: '',
      },
      users: {
        type: 'relation',
        label: 'Users',
        placeholder: '',
      },
      transactions: {
        type: 'relation',
        label: 'Transactions',
        placeholder: '',
      },
      bank: {
        type: 'relation',
        label: 'Bank',
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
        placeholder: 'placeholder...',
      },
      referee: {
        type: 'relation',
        label: 'referee',
        placeholder: 'placeholder...',
      },
    },
  }
}
