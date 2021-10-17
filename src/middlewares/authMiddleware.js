const { verifyAccessToken } = require('../services/jwt');
const ApiError = require('../utils/ApiError');

function authMiddleware(req, res, next) {
  const accessToken = req.headers.authorization?.split(' ')[1];

  if (accessToken == null) {
    next(new ApiError('Access token required', 401));
  }

  const user = verifyAccessToken(accessToken);
  req.user = user;

  next();
}

module.exports = {
  authMiddleware,
};
