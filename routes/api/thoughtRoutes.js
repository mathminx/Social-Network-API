const router = require('express').Router();

const {
  getThoughts,
  getOneThought,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(addThought);

// /api/thoughts/:thoughtId  one thought
router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions  add a reaction 
router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId  delete a reaction 
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
