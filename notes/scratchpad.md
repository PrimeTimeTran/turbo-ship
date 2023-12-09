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