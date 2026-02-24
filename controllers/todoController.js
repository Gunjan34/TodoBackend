// const Todo = require("../model/Todo");

// exports.getTodos = async (req, res) => {
//   const todos = await Todo.find({ userId: req.user });
//   res.json(todos);
// };

// exports.createTodo = async (req, res) => {
//   const todo = await Todo.create({
//     text: req.body.text,
//     userId: req.user,
//   });
//   res.json(todo);
// };

// exports.updateTodo = async (req, res) => {
//   const todo = await Todo.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true }
//   );
//   res.json(todo);
// };

// exports.deleteTodo = async (req, res) => {
//   await Todo.findByIdAndDelete(req.params.id);
//   res.json({ message: "Deleted" });
// };

const Todo = require("../model/Todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user.id });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create({
      text: req.body.text,
      userId: req.user.id, // ✅ FIXED
    });

    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
