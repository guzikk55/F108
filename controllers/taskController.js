const Task = require('../models/Task');

exports.list = async (req, res) => {
  const filter = { userId: req.session.userId };
  if (req.query.filter === 'done') filter.completed = true;
  if (req.query.filter === 'todo') filter.completed = false;

  const tasks = await Task.find(filter).sort({ title: 1 });
  res.render('tasks', { tasks, filter: req.query.filter || 'all' });
};

exports.addForm = (req, res) => res.render('addTask');
exports.add = async (req, res) => {
  await Task.create({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed === 'on',
    userId: req.session.userId
  });
  res.redirect('/tasks');
};

exports.editForm = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.render('editTask', { task });
};

exports.edit = async (req, res) => {
  await Task.updateOne(
    { _id: req.params.id },
    {
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed === 'on'
    }
  );
  res.redirect('/tasks');
};

exports.delete = async (req, res) => {
  await Task.deleteOne({ _id: req.params.id });
  res.redirect('/tasks');
};
