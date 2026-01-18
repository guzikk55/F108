const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/tasksDB')
  .then(() => console.log('Połączono z MongoDB'))
  .catch(err => console.log(err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'sekretny_klucz',
  resave: false,
  saveUninitialized: false
}));


app.use(authRoutes);
app.use(taskRoutes);

app.get('/', (req, res) => res.redirect('/login'));


app.use((req, res) => {
  res.render('error', { message: 'Strona nie istnieje' });
});

app.listen(3149, () => console.log('Serwer działa na http://localhost:3149'));
