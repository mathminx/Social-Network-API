const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getUsers(req, res) {
    console.log(req.params)
    try {
      const user = await User.find({});
      res.json(user);
    } 
    catch (err) {
      return res.status(500).json(err);
    }
  },

  // Get a single user
  async getOneUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' })
      }
      res.json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  
  // add a new user
  async addUser(req, res) {
    try {
      const user = await User.create(req.body);
      if (!user) {
        return res.status(404).json(err);
      }
      res.json(user);
    } 
    catch (err) {
      res.status(500).json(err);
    }
  },
  
  // Update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
      );
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' })
      }
      res.status(200).json({message: `User updated!`});
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  // Delete a user 
  async deleteUser(req, res) {
    try {
      const user = await User.deleteOne({ _id: req.params.userId });
      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      }
      res.json({ message: 'User successfully deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Add a friend to a user's friend list
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: {friends: req.params.friendId }},
      );
      if (!req.params.friendId) {
        return res.status(404).json({ message: 'No friend with that ID' })
      }
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' })
      }
      res.status(200).json({message: `Friend added to user's friend list!`});
    } 
    catch (err) {
      return res.status(500).json(err);
    }
  },

  
  // Add a thought to a user's thought list
  async addThoughtToUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: {thoughts: req.params.thoughtId }},
      );
      if (!req.params.thoughtId) {
        return res.status(404).json({ message: 'No thought with that ID' })
      }
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' })
      }
      res.status(200).json({message: `Thought added to user's thought list!`});
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  

  // Delete a friend from a user's friend list
  async deleteFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: {friends: req.params.friendId }},
      );
      if (!req.params.friendId) {
        return res.status(404).json({ message: 'No friend with that ID' })
      }
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' })
      }
      res.status(200).json({message: `Friend deleted from user's friend list!`});
    } catch (err) {
      return res.status(500).json(err);
    }
  }
};
