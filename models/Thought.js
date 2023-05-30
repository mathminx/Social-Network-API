const { Schema, Types, model } = require('mongoose');

// Schema for the reaction field subdocument
// in the thought model
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
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtual that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// This custom method formats the timestamp
thoughtSchema.methods.formatTimestamp = function () {
  return toDateString(this.createdAt);
};

// Initialize the Thought model
const Thought = model('thought', thoughtSchema);
const Reaction = model("reaction", reactionSchema);

module.exports = Thought, Reaction;
