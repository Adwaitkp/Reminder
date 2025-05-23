const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  datetime: {
    type: Date,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  method: {
    type: String,
    enum: ['SMS', 'Email'],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Reminder', reminderSchema);