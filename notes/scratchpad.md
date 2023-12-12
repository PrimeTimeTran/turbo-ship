[{type: 'string'}, {type: 'enumerator'}, {type:'relation'}]


  static opts = [
    'boolean',
    'string',
    'text',
    'integer',
    'decimal',
    'date',
    'dateTime',
    'array',
    'map',
    'enumerator',
    'enumeratorMulti',
    'relation',
    'otm',
    'mto',
    'oto',
    'mtm',
  ]


db.foos.insertOne({
    fooBolean: true,
    fooString: 'A Foo String',
    fooText: 'A Foo Text',
    fooInteger: 18,
    fooDecimal: 4.20,
    fooDate: new Date("2016-05-18T16:00:00Z"),
    fooDateTime: new Date("2016-05-18T16:00:00Z"),
    fooArray: [],
    fooMap: {},
    fooEnumerator: [],
    fooEnumeratorMulti: [],
    fooOTM: [new ObjectId()],
    fooMTO: new ObjectId(),
    fooOTO: new ObjectId(),
    fooMTM: [new ObjectId()],
    
})


// import { ClockIcon, ChartPieIcon, UserGroupIcon } from '@heroicons/vue/20/solid'

// export const globalMeta = {
//   meta: {
//     entities: ['users', 'wizards', 'foos', 'bars'],
//     sidebar: [
//       { path: 'dashboard', label: 'Dashboard', icon: ChartPieIcon },
//       { path: 'auditlogs', label: 'Audit Logs', icon: ClockIcon },
//       { path: 'users', label: 'Users', icon: UserGroupIcon },
//       { path: 'wizards', label: 'Wizards' },
//       { path: 'foos', label: 'Foos' },
//       { path: 'bars', label: 'Bars' },
//       { path: 'spams', label: 'Spams' },
//     ],
//   },
//   wizards: {
//     _id: { type: 'ObjectId' },
//     dob: { label: 'D.O.B.', type: 'date' },
//     firstName: { label: 'First Name', type: 'string' },
//     lastName: { label: 'Last Name', type: 'string' },
//     email: { label: 'Email', type: 'string' },
//     gender: { label: 'Gender', type: 'string' },
//     city: { label: 'City', type: 'string' },
//     country: { label: 'Country', type: 'string' },
//     jobTitle: { label: 'Job Title', type: 'string' },
//     industry: { label: 'Industry', type: 'string' },
//     patronus: { label: 'Patronus', type: 'string' },
//     avatarUrl: { label: 'AvatarUrl', type: 'string' },
//     fanScore: { label: 'Fan Score', type: 'decimal' },
//     potions: { label: 'Potions', type: 'integer' },
//     charms: { label: 'Charms', type: 'integer' },
//     dada: { label: 'D.A.D.A.', type: 'integer' },
//     apparition: { label: 'Apparition', type: 'boolean' },
//     bookAppearances: { label: 'Appearances', type: 'enumeratorMulti', options: [1, 2, 3, 4, 5, 6, 7, 8] },
//     house: {
//       label: 'House',
//       type: 'enumerator',
//       options: ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw', 'unknown'],
//     },
//     topSpells: {
//       label: 'Top Spells',
//       type: 'enumeratorMulti',
//       options: ['jinxes', 'hexes', 'charms', 'curses', 'spells', 'counters', 'healing', 'transfigurations'],
//     },
//     languages: {
//       label: 'Languages',
//       type: 'enumeratorMulti',
//       options: [
//         'Rust',
//         'C++',
//         'Dart',
//         'Perl',
//         'COBOL',
//         'Go',
//         'Javascript',
//         'Java',
//         'Typescript',
//         'Scala',
//         'Ruby',
//         'Swift',
//         'Python',
//         'Kotlin',
//         'C',
//         'R',
//         'C#',
//         'PHP',
//       ],
//     },
//   },
// }
