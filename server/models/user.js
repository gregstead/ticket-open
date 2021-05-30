const { model, Schema } = require("mongoose");
const validator = require("validator");

const userSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Person",
  },
  department: String,
  password: String,
  role: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Users", userSchema);
