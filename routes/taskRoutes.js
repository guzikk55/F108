const express = require('express');
const router = express.Router();
const task = require('../controllers/taskController');
const auth = require('../middleware/authMiddleware');

router.get('/tasks', auth, task.list);

router.get('/tasks/add', auth, task.addForm);
router.post('/tasks/add', auth, task.add);

router.get('/tasks/edit/:id', auth, task.editForm);
router.post('/tasks/edit/:id', auth, task.edit);

router.get('/tasks/delete/:id', auth, task.delete);

module.exports = router;
