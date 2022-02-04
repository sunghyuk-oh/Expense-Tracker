const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bycrypt = require('bcryptjs');
const { urlencoded } = require('express');

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded());

app.listen(3000, () => console.log('Server is running...'));
