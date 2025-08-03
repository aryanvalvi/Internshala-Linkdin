const mongoose = require("mongoose")

const textPostSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
)
const TextPost = mongoose.model("TextPost", textPostSchema)

module.exports = TextPost
