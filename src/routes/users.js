const express = require('express');

const router = express.Router();

const {
  createUser,
  getUserById,
  updateUser,
  deactivateUser,
  loginUser,
} = require('../controllers/users');

router.post('/', createUser);

router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deactivateUser);

router.post('/login', loginUser);

module.exports = router;
