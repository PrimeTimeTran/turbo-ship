export const FooBars = {
  server: 'nuxt',
  mobile: 'flutter',
  fbDev: {},
  fbProd: {},
  entities: [
    {
      name: 'foo',
      label: 'Foo',
      plural: 'foos',
      pluralL: 'Foos',
      attributes: [
        {
          validators: [],
          validations: [],
          type: 'boolean',
          name: 'fooBoolean',
          label: 'fooBoolean',
          _id: '6dcc79ee7eb4f14dc1e0ce4b',
          placeholder: '',
          relation: { name: null, type: '' },
        },
        {
          validators: [],
          validations: [],
          type: 'string',
          name: 'fooString',
          label: 'fooString',
          _id: '3d00e44df2b3bb22da6723cb',
          placeholder: '',
          relation: { name: null, type: '' },
        },
        {
          validators: [],
          validations: [],
          type: 'text',
          name: 'fooText',
          label: 'fooText',
          _id: 'bcbbfc4c1547d1627cd15fe2',
          placeholder: '',
          relation: { name: null, type: '' },
        },
        {
          validators: [],
          validations: [],
          type: 'integer',
          name: 'fooInteger',
          label: 'fooInteger',
          _id: '25baeb5cb6b90eb3dd68ce9d',
          placeholder: '',
          relation: { name: null, type: '' },
        },
        {
          validators: [],
          validations: [],
          type: 'decimal',
          name: 'fooDecimal',
          label: 'fooDecimal',
          _id: 'b0dc5b861bf1cccdffa63ae4',
          placeholder: '',
          relation: { name: null, type: '' },
        },
        {
          validators: [],
          validations: [],
          type: 'date',
          name: 'fooDate',
          label: 'fooDate',
          _id: 'ad24804ffbd5a7932701d5f1',
          placeholder: '',
          relation: { name: null, type: '' },
        },
        {
          validators: [],
          validations: [],
          type: 'dateTime',
          name: 'fooDateTime',
          label: 'fooDateTime',
          _id: '10ebc11ec20a1cac1e1abdfe',
          placeholder: '',
          relation: { name: null, type: '' },
        },
        {
          validators: [],
          validations: [],
          type: 'array',
          name: 'fooArray',
          label: 'fooArray',
          _id: '2acf20585fe9beac06d823d8',
          placeholder: '',
          relation: { name: null, type: '' },
        },
        {
          validators: [],
          validations: [],
          type: 'map',
          name: 'fooMap',
          label: 'fooMap',
          _id: '6fbadff36a541a3730eceabc',
          placeholder: '',
          relation: { name: null, type: '' },
        },
        {
          validators: [],
          validations: [],
          type: 'enumerator',
          name: 'fooEnumerator',
          label: 'fooEnumerator',
          _id: 'df3dab2f94babfb3eb2decef',
          placeholder: '',
          relation: { name: null, type: '' },
          options: 'a,b,c',
        },
        {
          validators: [],
          validations: [],
          type: 'enumeratorMulti',
          name: 'foodEnumeratorMulti',
          label: 'foodEnumeratorMulti',
          _id: 'd35baeae0fdea2f0aaba41ad',
          placeholder: '',
          relation: { name: null, type: '' },
          options: 'a,b,c',
        },
        {
          validators: [],
          validations: [],
          type: 'relation',
          name: 'fooOTM',
          label: 'fooOTM',
          _id: '3b91bb9236bf6ae409babfed',
          placeholder: '',
          relation: { name: 'related', type: 'otm' },
        },
        {
          validators: [],
          validations: [],
          type: 'relation',
          name: 'fooMTO',
          label: 'fooMTO',
          _id: 'cb9e4df7b51061a10b22ba8c',
          placeholder: '',
          relation: { name: 'related', type: 'mto' },
        },
        {
          validators: [],
          validations: [],
          type: 'relation',
          name: 'fooOTO',
          label: 'fooOTO',
          _id: '9ba3dbf02fd484ec618a9e8f',
          placeholder: '',
          relation: { name: 'related', type: 'oto' },
        },
        {
          validators: [],
          validations: [],
          type: 'relation',
          name: 'fooMTM',
          label: 'fooMTM',
          _id: 'ec2ef0ec3cd71cfecabfbcd4',
          placeholder: '',
          relation: { name: 'related', type: 'mtm' },
        },
      ],
      _id: '8c5a8f9659e0f926cf0da3ff',
    },
    // {
    //   name: 'bar',
    //   label: 'Bar',
    //   plural: 'bars',
    //   pluralL: 'Bars',
    //   attributes: [
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'boolean',
    //       name: 'barBoolean',
    //       label: 'barBoolean',
    //       _id: '987a545dbdead5e2e7ad2ac4',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'string',
    //       name: 'barString',
    //       label: 'barString',
    //       _id: 'f192eb7ccfd06637e7fb57bb',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'text',
    //       name: 'barText',
    //       label: 'barText',
    //       _id: 'b3a858cd156fb2549008bc08',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'integer',
    //       name: 'barInteger',
    //       label: 'barInteger',
    //       _id: 'ecb76bc237ade7e4da91ab9e',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'decimal',
    //       name: 'barDecimal',
    //       label: 'barDecimal',
    //       _id: 'bfe9d52efbeff505dae1ceb5',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'date',
    //       name: 'barDate',
    //       label: 'barDate',
    //       _id: 'd5b66df33ba6d6ff4ddceea1',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'dateTime',
    //       name: 'barDateTime',
    //       label: 'barDateTime',
    //       _id: '9bba1b592ed7f19cb532617d',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'string',
    //       name: 'barArray',
    //       label: 'barArray',
    //       _id: 'cdbf93b9b21f5e2c05f263ec',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'array',
    //       name: 'barArray',
    //       label: 'barArray',
    //       _id: '9ef99e85bf56f2e7fa867db8',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'map',
    //       name: 'barMap',
    //       label: 'barMap',
    //       _id: '08b3cadc3fb1b9aee96b0d0a',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'enumerator',
    //       name: 'barEnumerator',
    //       label: 'barEnumerator',
    //       _id: 'b4597ceb028ec09ac9c28ee6',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'enumeratorMulti',
    //       name: 'barEnumeratorMulti',
    //       label: 'barEnumeratorMulti',
    //       _id: 'cae0e118ce21d38b0ba0aafb',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'relation',
    //       name: 'barOTM',
    //       label: 'barOTM',
    //       _id: 'b547ea1a5239ea0fbaacdd05',
    //       placeholder: '',
    //       relation: { name: null, type: 'otm' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'relation',
    //       name: 'barMTO',
    //       label: 'barMTO',
    //       _id: 'd47cdfdad7dbea1070aa2e77',
    //       placeholder: '',
    //       relation: { name: null, type: 'mto' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'relation',
    //       name: 'barOTO',
    //       label: 'barOTO',
    //       _id: 'ab1fbe3bc34cd19fcee35adf',
    //       placeholder: '',
    //       relation: { name: null, type: 'oto' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'relation',
    //       name: 'barMTM',
    //       label: 'barMTM',
    //       _id: '28b75cdedf1afdad5ddd7ab2',
    //       placeholder: '',
    //       relation: { name: null, type: 'mtm' },
    //     },
    //   ],
    //   _id: 'd4f04297edcdc911cef119d7',
    // },
    // {
    //   name: 'spam',
    //   label: 'Spam',
    //   plural: 'spams',
    //   pluralL: 'Spams',
    //   attributes: [
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'relation',
    //       name: 'spamOTM',
    //       label: 'spamOTM',
    //       _id: 'b1bfbeb9b2f1ae866fc98af1',
    //       placeholder: '',
    //       relation: {
    //         name: null,
    //         type: 'otm',
    //       },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'relation',
    //       name: 'spamMTO',
    //       label: 'spamMTO',
    //       _id: '8e3dcdeffaa4267678ff0aa6',
    //       placeholder: '',
    //       relation: {
    //         name: null,
    //         type: 'mto',
    //       },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'relation',
    //       name: 'spamOTO',
    //       label: 'spamOTO',
    //       _id: 'ec809ef8acbc5b375c54ba3f',
    //       placeholder: '',
    //       relation: {
    //         name: null,
    //         type: 'oto',
    //       },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'relation',
    //       name: 'spamMTM',
    //       label: 'spamMTM',
    //       _id: '4660f11b022f1fbcdbe7dbda',
    //       placeholder: '',
    //       relation: {
    //         name: null,
    //         type: 'mtm',
    //       },
    //     },
    //   ],
    //   _id: '00bc10f6340581815875dccd',
    // },
    // {
    //   name: 'ham',
    //   label: 'Hams',
    //   plural: 'hams',
    //   pluralL: 'Hams',
    //   attributes: [
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'boolean',
    //       name: 'hamBoolean',
    //       label: 'hamBoolean',
    //       _id: 'cadad541547c8bc7afa56fef',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'string',
    //       name: 'hamString',
    //       label: 'hamString',
    //       _id: '69b6de7c59bca3c2b32b2d3d',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'text',
    //       name: 'hamText',
    //       label: 'hamText',
    //       _id: 'd86d9de5aa3e516f7f8e2e68',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'integer',
    //       name: 'hamInteger',
    //       label: 'hamInteger',
    //       _id: '2fccec2ca78a9dbaac15fc60',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'decimal',
    //       name: 'hamDecimal',
    //       label: 'hamDecimal',
    //       _id: 'b11d37f100ba6dbbe3b045ea',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'date',
    //       name: 'hamDate',
    //       label: 'hamDate',
    //       _id: '7a3b54ecaec09de3fcc622eb',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'dateTime',
    //       name: 'hamDatetime',
    //       label: 'hamDatetime',
    //       _id: 'ded62deda70ad9734ab2c4de',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'array',
    //       name: 'hamArray',
    //       label: 'hamArray',
    //       _id: 'ed0abd3eac9fcdceef8cda8d',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'map',
    //       name: 'hamMap',
    //       label: 'hamMap',
    //       _id: 'dae6a21707dcecba8690a706',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'enumerator',
    //       name: 'hamEnumerator',
    //       label: 'hamEnumerator',
    //       _id: '7fcef1b4b0cbaced6d417ab7',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //     {
    //       validators: [],
    //       validations: [],
    //       type: 'enumeratorMulti',
    //       name: 'hamEnumeratorMulti',
    //       label: 'hamEnumeratorMulti',
    //       _id: 'ac1ddecb8eada62a8eee05cf',
    //       placeholder: '',
    //       relation: { name: null, type: '' },
    //     },
    //   ],
    //   _id: '5a2c983127d6c980c8afe8c5',
    // },
  ],
}
