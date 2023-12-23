import mongoose, { Schema } from 'mongoose'
import { Auditor } from './Audit/Audit'

export const fooEnumerators = {
  fooEnumerator: {
    singleA: 'singleA',
    singleB: 'singleB',
    singleC: 'singleC',
    singleD: 'singleD',
    singleE: 'singleE',
    singleF: 'singleF',
    singleG: 'singleG',
  },

  foodEnumeratorMulti: {
    multiA: 'multiA',
    multiB: 'multiB',
    multiC: 'multiC',
    multiD: 'multiD',
    multiE: 'multiE',
    multiF: 'multiF',
    multiG: 'multiG',
  },
}

const fooSchema = new Schema({
  fooBoolean: {
    type: Boolean,
  },
  fooString: {
    type: String,
  },
  fooText: {
    type: String,
  },
  fooInteger: {
    type: BigInt,
  },
  fooDecimal: {
    type: Schema.Types.Decimal128,
  },
  fooDate: {
    type: Date,
  },
  fooDateTime: {
    type: Date,
  },
  fooArray: {
    type: [],
  },
  fooMap: {
    type: Map,
    of: String,
  },
  fooEnumerator: {
    type: String,
    enum: ['singleA', 'singleB', 'singleC', 'singleD', 'singleE', 'singleF', 'singleG'],
  },
  foodEnumeratorMulti: {
    type: [String],
    enum: ['multiA', 'multiB', 'multiC', 'multiD', 'multiE', 'multiF', 'multiG'],
  },
  fooOTM: [{ type: Schema.Types.ObjectId, ref: 'FooOTM' }],
  fooMTO: { type: Schema.Types.ObjectId, ref: 'FooMTO' },
  fooOTO: { type: Schema.Types.ObjectId, ref: 'FooOTO' },
  fooMTM: [{ type: Schema.Types.ObjectId, ref: 'FooMTM' }],
})
Auditor.addHooks(fooSchema)
export { fooSchema }
export const Foo = mongoose.model('Foo', fooSchema)
