const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { urlencoded } = require('express');
const authenticate = require('./middleware/authMiddleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded());

global.users = [
  {
    username: 'johndoe',
    password: 'password',
  },
];

// DESCRIPTION  - REGISTER
app.post('/register', (req, res) => {
  const { firstName, lastName, email, username, password, confirmPassword } =
    req.body;

  if (password !== confirmPassword) {
    res.json({ success: false, message: 'Please match the password' });
  }

  const user = users.find((user) => user.username === username);

  if (!user) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    users.push({
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: hash,
    });
    console.log(users);

    res.json({ success: true, message: 'Successfully registered!' });
  } else {
    res.json({
      success: false,
      message: 'username existed. Please try again.',
    });
  }
});

// DESCRIPTION  - LOGIN
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username == username && user.password == password
  );

  if (user) {
    // generate the json web token
    const token = jwt.sign({ username: user.username }, 'SECRETKEY');

    res.json({ success: true, token: token });
  } else {
    // response with not authenticated
    res.json({ success: false, message: 'Not authenticated' });
  }
});

app.get('/accounts/:username', authenticate, (req, res) => {
  const { username } = req.params;
  const userAcct = users.filter((user) => user.username === username);

  res.json(userAcct);
});

app.listen(3000, () => console.log('Server is running...'));
