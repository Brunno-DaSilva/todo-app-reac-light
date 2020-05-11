//=============================
//      Dependencies
//=============================
const mongoose = require("mongoose");

//=============================
//      User Schema
//=============================
const todoSchema = new mongoose.Schema({
  todo: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
});

//=============================
//      User Models
//=============================
const Todo = mongoose.model("Todo", todoSchema);

//=============================
//      Export User Models
//=============================
module.exports = Todo;
