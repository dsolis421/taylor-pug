var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const breedSchema = new mongoose.Schema({
  'name' : {
    type: String,
    required: true
  },
  'type' : {
    type: String,
    required: true
  },
  'size' : {
    type: String,
    required: false
  },
  'description' : {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('breeds', breedSchema);
