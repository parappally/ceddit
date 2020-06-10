const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  text: {
    type: String,
    required: true,
    trim: false,
    minlength: 3
  },
  title: {
    type: String,
    required: true,
    trim: false,
    minlength: 1
  },
  subreddit: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;