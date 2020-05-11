//=============================
//      Dependencies
//=============================
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Todo = require("./models/todos");
const PORT = process.env.PORT || 5000;

//=============================
//          Data
//=============================

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/activeDirectoryApp";

//=============================
// Required Middleware Engine
//=============================

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Tells express to parse data from POST request:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// //method override
// app.use(methodOverride("_method"));

// =============================
//      Mongoose Connection
// =============================
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Error / success
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);

mongoose.connection.on("connected", () =>
  console.log("mongo connected: ", MONGODB_URI)
);

mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));
// open the connection to mongo
mongoose.connection.on("open", () => {});

// =============================
//          Routers
// =============================

/****************************************************************************************
 * Presentational Routes
 * Index: shows a list of all of our resources and has linked to New, Edit, & Delete
 * New: shows a form to creata new resource lined to create
 * Show: shows one individual resource from our list
 * EDIT: Shows a form to update a resource linked to our Update route
 ****************************************************************************************/

//====================
//       Index
//====================

app.get("/todos", (req, res) => {
  //Use Users model to get all Users
  Todo.find({}, (error, allTodos) => {
    res.render("Index", {
      todos: allTodos,
    });
  });
});

// //====================
// //       New
// //====================
// app.get("/todos/new", (req, res) => {
//   res.render("New");
// });
// //====================
// //       Show
// //====================
// app.get("/budgets/:id", (req, res) => {
//   res.render("Show.jsx", { Budget: Budget[req.params.id] });
// });

/*************************************************************************
 * Functional Routes
 * Create: creates a new resource using app.post() | Post
 * Delete: deletes a resource use app.delete() | Destroy
 * Update: updates a resource | PUT
 *************************************************************************/

//====================
//    Create Route
//====================
app.post("/todos", (req, res) => {
  //Use Model to crate User document
  Todo.create(req.body, (error, createdTodo) => {
    res.redirect("/todos");
  });
});

//====================
//      Delete
//====================
app.delete("/:id", (req, res) => {
  // Delete document from collection
  Todo.findByIdAndRemove(req.params.id, (err, todos) => {
    res.redirect("/todos");
  });
});
//====================
//      Edit
//====================
// app.get("/todos/:id/edit", (req, res) => {
//   res.render("Edit", {
//     Budget: Budget[req.params.id],
//     index: req.params.id,
//   });
// });
// //====================
// //      Update
// //====================
// app.put("/budgets/:id", (req, res) => {
//   Budget[req.params.id] = req.body; //in our budget array, find the index that is specified in the url (:id).  Set that element to the value of req.body (the input data)
//   res.redirect("/budgets"); //redirect to the index page
// });

//=============================
// Listening on Port 3000
//=============================
app.listen(PORT, () => {
  console.log(`Ascoltando al porto... ${PORT}`);
});
