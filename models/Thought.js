const { Schema, Types, model } = require('mongoose');
const { format_date } = require('../utils/helper')
const ReactionSchema = require('./Reaction');
const ThoughtSchema = require('./Thought');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 4,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now(),
            get: timestamp => format_date(timestamp)
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            ReactionSchema
        ],
    },
    {
        toJSON: {
            virturals: true,
            getters: true,
        },
        id: false
    },
    );

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return `${this.reactions.length}`;
    });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;