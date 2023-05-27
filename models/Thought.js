const { Schema, model } = require('mongoose');

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    thoughtText: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
