const { Thought, User, Reaction } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thought = await Thought.find({});
      res.json(thought);
    } 
    catch (err) {
      res.status(500).json(err);
    }
  },

  // Get one thought
  async getOneThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' })
      }
      console.log(thought, typeof thought);
      res.json(thought);
    } catch (err) {
      return res.status(500).json(err);
    }
  },


  // Add a thought
  async addThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { username: req.body.username },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'Thought created, but no user found with that name'});
      }
      res.json(thought);
    } 
    catch (err) {
      return res.status(500).json({message: "Uh-oh, something went wrong."});
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


  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ 
        _id: req.params.thoughtId });
      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with that id!" });
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
      }
      res.json({ message: "Thought deleted successfully!" });
    }
    catch (err) {
      res.status(500).json(err);
    }
  },
 

  // Add a reaction to a thought
  async addReaction(req, res) {
    try {
      const newReaction = await Thought.findOneAndUpdate(
        {_id: req.params.thoughtId },

        { $addToSet: { reactions: req.body }},
        { new: true }
        );
      if (!newReaction) {
        return res.status(404).json({message: 'No thought found with that id!'});
      }
      return res.status(200).json({ message:'Reaction added!' });
    }
    catch (err) {
      return res.status(500).json(err);
    }
  },

  // Delete a reaction 
  async deleteReaction(req, res) {
    try {
      const reaction = await Thought.Reaction.pull({reactionId: req.params.reactionId});
      if (!reaction) {
        res.status(404).send('Reaction not found!');
      }
      res.status(200).jsson({ message:'Reaction deleted!' });

    }
    catch (err) {
      res.status(500).json({message: "Uh-oh, something went wrong."});
    }
  }
};

