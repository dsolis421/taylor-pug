var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const gallerySchema = new mongoose.Schema({
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
  }
});

module.exports = mongoose.model('gallery', gallerySchema);
