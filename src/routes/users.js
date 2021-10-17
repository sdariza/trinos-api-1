const express = require('express');

const router = express.Router();

const {
  createUser,
  getUserById,
  updateUser,
  deactivateUser,
  loginUser,
} = require('../controllers/users');

const { authMiddleware } = require('../middlewares/authMiddleware');

router.post('/', createUser);

router.get('/:id', getUserById);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deactivateUser);

router.post('/login', loginUser);

module.exports = router;
