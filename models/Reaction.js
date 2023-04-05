const { Schema, Types } = require('mongoose');
const { format_date }= require('../utils/helper')

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 4,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get:timestamp=>format_date(timestamp)
    },
  },
  {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
  }
);
