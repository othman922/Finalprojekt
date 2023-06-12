const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  image: {
    type: String,
    required: 'This field is required'
},
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;