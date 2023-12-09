import mongoose, { Schema } from 'mongoose'
import { addHooks } from './Audit/Audit'

export const fooEnumerators = {
  fooEnumerator: {
    a: 'a',
    b: 'b',
    c: 'c',
  },

  foodEnumeratorMulti: {
    a: 'a',
    b: 'b',
    c: 'c',
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
    type: Number,
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
    type: [String],
    enum: ['a', 'b', 'c'],
  },
  foodEnumeratorMulti: {
    type: [String],
    enum: ['a', 'b', 'c'],
  },
  fooOTM: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Related' }],
  },
  fooMTO: {
    type: { type: Schema.Types.ObjectId, ref: 'Related' },
  },
  fooOTO: {
    type: { type: Schema.Types.ObjectId, ref: 'Related' },
  },
  fooMTM: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Related' }],
  },
})

addHooks(fooSchema)
export { fooSchema }
export const Foo = mongoose.model('Foo', fooSchema)