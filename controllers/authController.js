const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.getLogin = (req, res) => res.render('login');
exports.getRegister = (req, res) => res.render('register');

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.send('Wypełnij wszystkie pola');
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.send('Użytkownik już istnieje');
    }

    const hash = await bcrypt.hash(password, 10);

    await User.create({ email, password: hash });
    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.send('Błąd przy rejestracji');
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.send('Wypełnij wszystkie pola');

    const user = await User.findOne({ email });
    if (!user) return res.send('Niepoprawny email lub hasło');

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.send('Niepoprawny email lub hasło');

    req.session.userId = user._id;
    res.redirect('/tasks');
  } catch (err) {
    console.error(err);
    res.send('Błąd przy logowaniu');
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
};
