export const News = {
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
      _id: '57dbd2eb064c0d9ac7fc47a1',
      name: 'chat',
      plural: 'chats',
      label: 'Chat',
      pluralL: 'Chats',
      attributes: [
        {
          name: 'status',
          type: 'enumerator',
          _id: '177cb5ead63ef967d1adcc2c',
          validators: [],
          validations: [],
          options: 'pending,open,closed',
          relation: { type: null, name: null },
          label: 'Status',
          placeholder: 'pending,open,closed',
        },
      ],
    },
    {
      _id: '17dbd2eb064c0d9ac7fc47a4',
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
          placeholder: 'Referrer',
          relation: { name: 'User', type: 'mto' },
        },
        {
          validators: [],
          validations: [],
          type: 'relation',
          name: 'referee',
          label: 'referee',
          _id: 'c0eed3f3ae2b7bb8f1a34a02',
          placeholder: 'Referee',
          relation: { name: 'User', type: 'mto' },
        },
      ],
      _id: '7ead9f17189acfbb4bfe9ddf',
    },
    {
      name: 'post',
      label: 'Post',
      plural: 'posts',
      pluralL: 'Posts',
      attributes: [
        {
          validators: [],
          validations: [],
          type: 'text',
          name: 'body',
          _id: 'b2f7ba1d54e96efde13eb8cb',
          relation: { type: null, name: null },
          label: 'Body',
        },
        {
          validators: [],
          validations: [],
          type: 'relation',
          name: 'user',
          _id: 'edc7cb110e4ddcabd5a56e9b',
          relation: { type: 'mto', name: 'user' },
          label: 'User',
        },
        {
          validators: [],
          validations: [],
          type: 'relation',
          name: 'comments',
          _id: 'c95a6dabb57da6faed231683',
          relation: { type: 'otm', name: 'comment' },
          label: 'Comments',
        },
        {
          validators: [],
          validations: [],
          type: 'relation',
          name: 'reactions',
          _id: 'bcb7aaf6a9c84ec2d3c4fae1',
          relation: { type: 'otm', name: 'reaction' },
          label: 'Reactions',
        },
        {
          validators: [],
          validations: [],
          type: 'relation',
          name: 'assets',
          _id: 'ee2dba55b09fabf3901ab6c7',
          relation: { type: 'otm', name: 'attachment' },
          label: 'Assets',
        },
      ],
      _id: '59abcbce7aeedbbcd5d90b93',
    },
    {
      name: 'comment',
      label: 'Comment',
      plural: 'comments',
      pluralL: 'Comments',
      attributes: [
        {
          validators: [],
          validations: [],
          type: 'text',
          name: 'body',
          _id: 'fe3dd5eceafdc7a6cdccc334',
          relation: { type: null, name: null },
          label: 'Body',
        },
        {
          validators: [],
          validations: [],
          type: 'relation',
          name: 'user',
          _id: 'eca50236bd43c6ad2b975a2d',
          relation: { type: 'mto', name: 'user' },
          label: 'User',
        },
        {
          validators: [],
          validations: [],
          type: 'relation',
          name: 'commentableId',
          _id: 'fd2cb3c1df7db98edc76af50',
          relation: { type: 'mto', name: null },
          label: 'CommentableId',
        },
        {
          validators: [],
          validations: [],
          type: 'enumerator',
          name: 'commentableType',
          _id: 'aa62baeb3f95cade5d9cd459',
          relation: { type: null, name: null },
          label: 'CommentableType',
          options: 'post,comment,asset',
        },
      ],
      _id: '36f6b641c611311ad6d9d9b4',
    },
    {
      name: 'reaction',
      label: 'Reaction',
      plural: 'reactions',
      pluralL: 'Reactions',
      attributes: [
        {
          validators: [],
          validations: [],
          type: 'enumerator',
          name: 'type',
          options: 'like,love,wow,laugh,cry,angry',
          _id: 'f8499edfb24acffab5dbbccc',
          relation: { type: null, name: null },
          label: 'Type',
        },
        {
          validators: [],
          validations: [],
          type: 'relation',
          name: 'reactionableId',
          _id: '61da4cc07fe4e3eeca9fd24c',
          relation: { type: 'mto', name: null },
          label: 'ReactionableId',
        },
        {
          validators: [],
          validations: [],
          type: 'enumerator',
          name: 'reactionableType',
          _id: '3b59b198cd3e54ced00d7ad2',
          relation: { type: null, name: null },
          label: 'ReactionableType',
          options: 'post,comment,message',
        },
      ],
      _id: '7e0d6abf4ae4baa8aeb165ac',
    },
    {
      name: 'asset',
      label: 'Asset',
      plural: 'assets',
      pluralL: 'Assets',
      attributes: [
        {
          validators: [],
          validations: [],
          type: 'mto',
          name: 'user',
          _id: '6a0458acd2eeabcb6a9dee9e',
          relation: { type: null, name: null },
          label: 'User',
        },
        {
          validators: [],
          validations: [],
          type: 'enumerator',
          name: 'type',
          _id: '3efbfe06042bf63ffaf809b2',
          relation: { type: null, name: null },
          label: 'Type',
          options: 'photo,video',
        },
        {
          validators: [],
          validations: [],
          type: 'enumerator',
          name: 'assetableType',
          _id: 'd44677c1618adafae9bc13bd',
          relation: { type: null, name: null },
          label: 'AssetableType',
          options: 'post,comment,message',
        },
        {
          validators: [],
          validations: [],
          name: 'assetableId',
          label: 'AssetableId',
          _id: 'd84f2b1ab09c37d7dcaf0fc9',
          relation: { type: 'mto', name: null },
          type: 'relation',
        },
      ],
      _id: '3e6a34dbe0ba5a4fb09f30c6',
    },
  ],
}