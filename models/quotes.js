var mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  'quote' : {
    type: String,
    required: true
  },
  'testimonial' : {
    type: [String],
    required: true
  },
  'author' : {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('quotes', quoteSchema);
