const { model, Schema } = require("mongoose");

const noteSchema = new Schema({
  note: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  isNewTodo: Boolean,
  todoType: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Note", noteSchema);
