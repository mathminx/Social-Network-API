const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get one thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a new thought
  async createThought(req, res) {
    console.log(req.body, req.params);
    try {
      const thought = await Thought.create(req.body);
      const name = await User.findOneAndUpdate(
        { username: req.body.username },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );
      if (!name) {
        return res
          .status(404)
          .json({ message: 'Thought created, but no user found with that name' });
      }
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json({message: "Uh-oh, something went wrong."});
    }
  },

  // Delete a thought
  async deleteThought(req, res) {
    console.log(req.params, req.body);
    try {
      const thought = await Thought.findOneAndDelete({ 
        _id: req.params.thoughtId });
      if (!thought) {
        return res
          .status(404)
          .json();
      }
      const user = await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );
      if (!user) {
        return res.status(207).json({
          message: "Thought deleted successfully but no user found with that thought",
        });
      res.json({ message: "Thought deleted successfully!" });
      }
    } 
    catch (err) {
      res.status(500).json(err);
    }
  },

  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
