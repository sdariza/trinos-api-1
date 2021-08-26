const express = require('express');

const router = express.Router();

const {
  createUser,
  getUserById,
  updateUser,
  deactivateUser,
} = require('../controllers/users');

router.post('/', createUser);

router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deactivateUser);

module.exports = router;
