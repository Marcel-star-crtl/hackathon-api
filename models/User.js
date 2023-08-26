const { model, Schema } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      index: { unique: true }
    },
    email: {
      type: String,
      required: true,
      index: { unique: true }
    },
    password: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['Instructor', 'Student'],
      required: true
    }, 
    phone_number: {
      type: String
    },
    avatar: {
      type: String
    }, 
    institution: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('User', userSchema);
