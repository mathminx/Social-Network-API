const { Schema, Types, model } = require('mongoose');
const dayJs = require("dayjs");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId,
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate,
    },
  },
);

// Schema for a thought
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtual: true, getters: true,
    },
    id: false,
  }
);

// Virtual that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// This custom method formats the timestamp
function formatDate(createdAt) {
  return dayJs(createdAt).format("MMM D, YYYY");
};

// Initialize the Thought and Reaction models
const Thought = model('thought', thoughtSchema);
const Reaction = model("reaction", reactionSchema);

module.exports = Thought, Reaction;
