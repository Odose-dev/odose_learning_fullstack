import mongoose, { Types } from "mongoose";

const schema = mongoose.schema;

const userShema = new schema({
  firstname: String,
  lastname: String,
  email: {
    Types: String,
    require: true,
  },

  password: {
    Types: String,
    require: true,
    default: "Pass123",
  },

  createdAt: {
    Types: Date,
    default: new Date.now(),
  },
});

const User = mongoose.model(user, userShema);
export default User;
