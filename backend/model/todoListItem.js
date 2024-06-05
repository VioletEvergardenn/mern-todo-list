const mongoose = require("mongoose");

const todoListItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  created_at: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model(
  "TodoListItem",
  todoListItemSchema,
  "todo-list"
);
