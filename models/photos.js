var mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  'name' : {
    type: String,
    required: false
  },
  'image' : {
    type: String,
    required: true
  },
  'story' : {
    type: String,
    required: false
  },
  'datetaken' : {
    type: String,
    required: false
  },
  'keywords' : {
    type: [String],
    required: false
  },
  'page' : {
    type: Number,
    required: true
  },
  'show' : {
    type: String,
    required: true
  },
  'order' : {
    type: Number,
    required: true
  },
  'shelter' : {
    type: String,
    required: false
  },
  'website' : {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('photos', photoSchema);
