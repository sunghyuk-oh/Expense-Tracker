const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bycrypt = require('bcryptjs');
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

app.get('/accounts', authenticate, (req, res) => {
  const { username } = req.body;
  const userAcct = users.filter((user) => user.username == username);

  res.json(userAcct);
});

app.listen(3000, () => console.log('Server is running...'));
