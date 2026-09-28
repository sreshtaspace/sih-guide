const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      default: "Anonymous",
    },

    role: {
      type: String,
      default: "Student",
    },

    answers: [
      {
        author: String,
        role: String,
        text: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);