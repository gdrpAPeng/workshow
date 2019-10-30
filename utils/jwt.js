const jwt = require("jsonwebtoken");

const config = require("../config");

function generateToken(data) {
  let token = jwt.sign(data, config.jwtPrivateKey, {
      expiresIn: 60 * 60 * 24
  });
  return token;
}

function verifyToken(token) {
  let result = jwt.verify(token, config.jwtPrivateKey);
  return result;
}

module.exports = {
  generateToken,
  verifyToken
};
