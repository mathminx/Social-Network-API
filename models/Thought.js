const { Schema, Types, model } = require('mongoose');

// Schema for the reaction field subdocument
// in the thought model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
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
  }
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
    },
    username: {
      type: String,
      required: true,
    },
    reaction: reactionSchema,
  }
);

// Virtual that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// This custom method formats the timestamp
reactionSchema.methods.formatTimestamp = function () {
  const formattedDate = toDateString(this.createdAt);
  const formattedTime = toTimeString(this.createdAt);
  return formattedDate, formattedTime;
};

// Initialize the Thought model
const Thought = model('thought', thoughtSchema);
const Reaction = model("reaction", reactionSchema);

module.exports = Thought, Reaction;
