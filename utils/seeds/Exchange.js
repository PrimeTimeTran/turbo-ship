export const Exchange = {
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
        {
          name: 'status',
          type: 'enumerator',
          _id: '077cb5ead63ef967d1adcc2c',
          validators: [],
          validations: [],
          options: 'pending,open,closed',
          relation: { type: null, name: null },
          label: 'Status',
          placeholder: 'pending,open,closed',
        },
        {
          name: 'standing',
          type: 'enumerator',
          _id: '077cb5ead63ef967d1adcc2d',
          validators: [],
          validations: [],
          options: 'current,behind',
          relation: { type: null, name: null },
          label: 'Standing',
          placeholder: 'current,behind',
        },
        {
          name: 'email',
          type: 'string',
          _id: '0ca1c138ce4ddacdcbbc49d6',
          validators: ['email', 'unique'],
          validations: [],
          relation: { type: null, name: null },
          label: 'Email',
          placeholder: 'john@email.com',
        },
        {
          name: 'phone',
          type: 'string',
          _id: '0ca1c138ce4ddacdcbbc49d1',
          validators: [],
          validations: [],
          relation: { type: null, name: null },
          label: 'Phone',
          placeholder: '88-888-8888',
        },
        {
          name: 'firstName',
          type: 'string',
          _id: '5aab0a1efa84976ab3afea9e',
          validators: [],
          validations: [],
          relation: { type: null, name: null },
          label: 'First Name',
          placeholder: 'John',
        },
        {
          name: 'lastName',
          type: 'string',
          _id: '040e9eeeec2ae4eb4fd2946e',
          validators: [],
          validations: [],
          relation: { type: null, name: null },
          label: 'Last Name',
          placeholder: 'Doe ',
        },
        {
          name: 'phone',
          type: 'string',
          _id: '040e9eeeec2ae4eb4fd1946e',
          validators: [],
          validations: [],
          relation: { type: null, name: null },
          label: 'Phone',
          placeholder: '777-777-7777',
        },
        {
          name: 'role',
          type: 'enumeratorMulti',
          _id: '7f3711fe5bcb2efde166c758',
          validators: [],
          validations: [],
          options: 'owner,admin,staff,customer',
          relation: { type: null, name: null },
          label: 'Role',
          placeholder: 'customer, employee, admin',
        },
        {
          validators: [],
          name: 'banks',
          type: 'relation',
          _id: 'd6db8ffc08aaed0ee2c9d8ce',
          validations: [],
          relation: { type: 'otm', name: 'bank' },
          label: 'Banks',
        },
        {
          validators: [],
          name: 'branches',
          type: 'relation',
          _id: 'ebed2ca23c6cc7f44afff197',
          validations: [],
          relation: { type: 'otm', name: 'branches' },
          label: 'Branches',
        },
        {
          validators: [],
          name: 'accounts',
          type: 'relation',
          _id: 'ebed2ca23c6cc7f44afff397',
          validations: [],
          relation: { type: 'otm', name: 'account' },
          label: 'Accounts',
        },
        {
          validators: [],
          name: 'transactions',
          type: 'relation',
          _id: '16dfc8bb206be2feaa2c6f04',
          validations: [],
          relation: { type: 'otm', name: 'transaction' },
          label: 'Transactions',
        },
        {
          name: 'age',
          type: 'integer',
          _id: 'dcb9b448e5bce7c8bdea1ece',
          validators: [],
          validations: [],
          relation: { type: null, name: null },
          label: 'Age',
          placeholder: '18',
        },
        {
          name: 'owner',
          type: 'boolean',
          _id: 'd3acf997e55592abc2c774d1',
          validators: [],
          validations: [],
          relation: { type: null, name: null },
          placeholder: 'true',
          label: 'Owner',
        },
        {
          validators: [],
          name: 'netWorth',
          type: 'decimal',
          _id: '6f5beab03b55eedac8e92a38',
          validations: [],
          relation: { type: null, name: null },
          label: 'NetWorth',
          placeholder: '$88,888,888',
        },
        {
          valid: false,
          validators: [],
          validations: [],
          name: 'messages',
          type: 'relation',
          _id: '5df7f9807cf4d62f17b0b9af',
          relation: { type: 'otm', name: 'message' },
          label: 'Messages',
        },
        { name: '_id', type: 'string', _id: '5f6ab0bbfb54cf51242ddb6a', validators: [], validations: [], label: '_id' },
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
          label: 'User',
          placeholder: 'john@gmail.com',
        },
        { name: '_id', type: 'string', _id: '3a1fa3ceb681ccd0bfa9ffbf', validators: [], validations: [], label: '_id' },
        {
          validators: [],
          name: 'balance',
          type: 'decimal',
          _id: '1fcb66bc9bfffdff5cb2a4d0',
          validations: [],
          relation: { type: null, name: null },
          label: 'Balance',
          placeholder: '$88,888',
        },
        {
          validators: [],
          name: 'bank',
          type: 'relation',
          relation: { type: 'mto', name: 'bank' },
          _id: 'b918f9d4301d7fa9f8ffc5cd',
          validations: [],
          label: 'Bank',
          placeholder: 'Bank of America',
        },
        {
          validators: [],
          name: 'transactions',
          type: 'relation',
          relation: { type: 'otm', name: 'transaction' },
          _id: '3fbbaa1f2f3b78c1cc6e8930',
          validations: [],
          label: 'Transactions',
        },
        {
          validators: [],
          name: 'type',
          type: 'enumerator',
          _id: 'fadc5faabe70daffd3b53ddd',
          validations: [],
          relation: { type: null, name: null },
          options: 'checking,banking,credit,investing,savings,home,auto',
          label: 'Type',
          placeholder: 'checking, savings, credit...',
        },
        {
          validators: [],
          name: 'accountNumber',
          type: 'string',
          _id: 'e94b64fd360d25f8335ba9bb',
          validations: [],
          relation: { type: null, name: null },
          label: 'Account Number',
          placeholder: '88888888',
        },
        {
          validators: [],
          name: 'routingNumber',
          type: 'string',
          _id: 'a42ede376f3edf8e23dc685e',
          validations: [],
          relation: { type: null, name: null },
          label: 'Routing Number',
          placeholder: '8888-8888',
        },
        {
          validators: [],
          name: 'branch',
          type: 'relation',
          _id: '3b1a2f8bdf4426ab3ac1d4fc',
          validations: [],
          relation: { type: 'mto', name: 'branch' },
          label: 'Branch',
          placeholder: 'Downtown',
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
        { name: '_id', type: 'string', _id: 'b8eccaecb1ac1e8725efec2b', validators: [], validations: [], label: '_id' },
        {
          validators: [],
          name: 'amount',
          type: 'decimal',
          _id: 'f66fd03735b45cad81d42d88',
          validations: [],
          relation: { type: null, name: null },
          label: 'Amount',
        },
        {
          validators: [],
          name: 'status',
          type: 'enumerator',
          options: 'processing,complete,declined,cancelled,rejected',
          _id: '0ec5c1e2cfbb99fe37a844e7',
          validations: [],
          relation: { type: null, name: null },
          label: 'Status',
          placeholder: 'processing,complete,declined,cancelled,rejected',
        },
        {
          validators: [],
          name: 'chargeDate',
          type: 'dateTime',
          _id: 'b5b16d729dbbd5e6c87807be',
          validations: [],
          relation: { type: null, name: null },
          label: 'Charge Date',
          placeholder: '12/02/23',
        },
        {
          validators: [],
          name: 'description',
          type: 'string',
          _id: 'dbcd9fd9b6e64f52f07bf8dc',
          validations: [],
          relation: { type: null, name: null },
          label: 'Description',
          placeholder: 'Description...',
        },
        {
          validators: [],
          name: 'user',
          type: 'relation',
          relation: { type: 'mto', name: 'user' },
          _id: 'a51f1f44e1bcb61b32d3bdcc',
          validations: [],
          label: 'User',
          placeholder: 'User...',
        },
        {
          validators: [],
          name: 'account',
          type: 'relation',
          relation: { type: 'mto', name: 'account' },
          _id: 'acff83fa7aeae96c6d0b7a1c',
          validations: [],
          label: 'Account',
        },
        {
          validators: [],
          name: 'branch',
          type: 'relation',
          relation: { type: 'mto', name: 'branch' },
          _id: 'ce0ffe8cfedbb01fa2f5dc3f',
          validations: [],
          label: 'Branch',
        },
        {
          validators: [],
          name: 'bank',
          type: 'relation',
          relation: { type: 'mto', name: 'bank' },
          _id: '984e2fb0aefbdf9ca7f280ef',
          validations: [],
          label: 'Bank',
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
          label: 'Body',
        },
        {
          validators: [],
          validations: [],
          type: 'relation',
          relation: { type: 'mto', name: 'user' },
          name: 'user',
          _id: '23da767f77e3c87f05df80ce',
          label: 'User',
        },
      ],
    },
    {
      name: 'product',
      label: 'Product',
      plural: 'products',
      pluralL: 'Products',
      attributes: [
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'companyUrl',
          _id: '4acfff5b2e00ed48f4e89fc4',
          relation: { type: null, name: null },
          label: 'CompanyUrl',
          placeholder: 'http://company.com',
        },
        {
          validators: [],
          validations: [],
          type: 'enumerator',
          name: 'type',
          _id: 'a4bef4b64787f89aacd0c1ff',
          relation: { type: null, name: null },
          label: 'Type',
          options: 'bank,hedgeFund,diversified',
          placeholder: 'bank,hedgeFund,diversified',
        },
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'title',
          _id: '851a7a5d44f14fad1b78aebe',
          relation: { type: null, name: null },
          label: 'Title',
          placeholder: '50% off...',
        },
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'imageUrl',
          _id: '94f4f21ad2f5dfdff163bad5',
          relation: { type: null, name: null },
          label: 'ImageUrl',
          placeholder: 'https://deal.company.com',
        },
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'linkForm',
          _id: '4c79a90f8f4242c48d0f5cf5',
          relation: { type: null, name: null },
          label: 'LinkForm',
          placeholder: 'https://deal.company.com?form=true',
        },
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'linkTerms',
          _id: 'fa001a1b295dad7eadbc04db',
          relation: { type: null, name: null },
          label: 'LinkTerms',
          placeholder: 'https://deal.company.com?terms=true',
        },
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'linkDisclosure',
          _id: '6a9fec5a196f55a30bb51dea',
          relation: { type: null, name: null },
          label: 'LinkDisclosure',
          placeholder: 'https://deal.company.com?disclosure=true',
        },
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'description',
          _id: '3beb8a3b3d68cbffddab2feb',
          relation: { type: null, name: null },
          label: 'Description',
          placeholder: 'A great deal because...',
        },
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'meta',
          _id: 'bf3bb0ddaf719cea923a3c8c',
          relation: { type: null, name: null },
          label: 'Meta',
          placeholder: 'A great deal because...',
        },
        {
          validators: [],
          validations: [],
          type: 'enumerator',
          name: 'insuranceType',
          _id: '8ded18f527bfd644eaff8e41',
          relation: { type: null, name: null },
          label: 'InsuranceType',
          placeholder: 'car,home,health,life',
          options: 'car,home,health,life',
        },
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'linkInsuranceQuote',
          _id: '9e4507dde31b9d41b5d6ba1f',
          relation: { type: null, name: null },
          label: 'LinkInsuranceQuote',
          placeholder: 'https://deal.company.com?quote=true',
        },
      ],
      _id: '308125ed79bddab87be3cabd',
    },
    {
      name: 'referral',
      label: 'Referral',
      plural: 'referrals',
      pluralL: 'Referrals',
      attributes: [
        {
          validators: [],
          validations: [],
          type: 'relation',
          name: 'referrer',
          label: 'referrer',
          _id: '6afb6baaef923ab38e8fa6f5',
          placeholder: 'placeholder...',
          relation: { name: 'User', type: 'mto' },
        },
        {
          validators: [],
          validations: [],
          type: 'relation',
          name: 'referee',
          label: 'referee',
          _id: 'c0eed3f3ae2b7bb8f1a34a02',
          placeholder: 'placeholder...',
          relation: { name: 'User', type: 'mto' },
        },
      ],
      _id: '7ead9f17189acfbb4bfe9ddf',
    },
  ],
}
