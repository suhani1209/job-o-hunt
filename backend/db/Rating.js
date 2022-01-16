const mongoose = require("mongoose");

let schema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["job", "applicant"],
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    rating: {
      type: Number,
      max: 5.0,
      default: -1.0,
      validate: {
        validator: function (v) {
          return v >= -1.0 && v <= 5.0;
        },
        msg: "Invalid rating",
      },
    },
  },
  //Collation allows users to specify language-specific rules for string comparison, 
  //such as rules for lettercase and accent marks.
  { collation: { locale: "en" } }
);

schema.index({ category: 1, receiverId: 1, senderId: 1 }, { unique: true });

module.exports = mongoose.model("ratings", schema);
