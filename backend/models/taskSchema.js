const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    index: true,
  },
  description: {
    type: String,
    required: true,
    index: true,
  },
  status: {
    type: String,
    enum: {
      values: ["Complete", "Incomplete"],
      message: " is not supported",
    },
    index: true,
  },
  dateOfTask: {
    type: Date,
    required: true,
    index: true,
  },
  creator: {
    type: String,
    required: true,
    index: true,
  },
});

//expenseSchema.plugin(AutoIncrement, { inc_field: "id" });

module.exports = mongoose.model("Task", taskSchema);
