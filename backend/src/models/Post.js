const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  author: String,
  place: String,
  description: String,
  hashtgs: String,
  image: String,
  likes: {
    type: Number,
    default: 0,
  }
},{
  timestamps: true,
});

module.exports = PostSchema;