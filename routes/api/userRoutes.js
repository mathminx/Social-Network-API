const router = require('express').Router();

const {
  getUsers,
  getOneUser,
  addUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
  addThoughtToUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(addUser);

// /api/users/:userId  one user
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId add/delete a friend from a user
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

// /api/users/:userId/friends/:friendId add/delete a friend from a user
router.route('/:userId/thoughts/:thoughtId').post(addThoughtToUser);

module.exports = router;
