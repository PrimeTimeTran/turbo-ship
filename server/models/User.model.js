import mongoose, { Schema } from "mongoose";

export const userEnumerators = {
  role: {
    owner: "owner",
    admin: "admin",
    staff: "staff",
    customer: "customer",
  },

  status: {
    open: "open",
    closed: "closed",
    pending: "pending",
  },
};

export const User = mongoose.model("User", {
  role: {
    type: [String],
  },
  status: {
    type: [String],
  },
  email: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  owner: {
    type: Boolean,
  },
  netWorth: {
    type: Schema.Types.Decimal128,
  },
});
