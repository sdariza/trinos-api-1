const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');

function generateAccessToken(id) {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: '1d' });
}

function verifyAccessToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = {
  generateAccessToken,
  verifyAccessToken,
};
