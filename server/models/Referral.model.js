
      
      import mongoose, { Schema } from 'mongoose'
      import { Auditor } from './Audit/Audit'
      
      export const referralEnumerators = {
    
  }
      
      
      const referralSchema = new Schema({
          referrer: { type: Schema.Types.ObjectId, ref: 'Referrer',  },referee: { type: Schema.Types.ObjectId, ref: 'Referee',  }
        })
        Auditor.addHooks(referralSchema)
        export { referralSchema }
        export const Referral = mongoose.model('Referral', referralSchema)
      
    