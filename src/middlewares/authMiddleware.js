const { verifyAccessToken } = require('../services/jwt');
const ApiError = require('../utils/ApiError');

function authMiddleware(req, res, next) {
  const accessToken = req.headers.authorization?.split(' ')[1];

  if (accessToken == null) {
    next(new ApiError('Access token required', 401));
  }

  const user = verifyAccessToken(accessToken);

  const isRole = (role) => {
    if (user.role !== role) {
      throw new ApiError('Role not authorized', 403);
    }
  };

  const isUserAuthorired = (userId) => {
    if (user.id !== userId) {
      throw new ApiError('User not authorized', 403);
    }
  };

  req.user = user;
  req.isRole = isRole;
  req.isUserAuthorired = isUserAuthorired;

  next();
}

module.exports = {
  authMiddleware,
};
