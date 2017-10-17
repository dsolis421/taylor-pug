var mongoose = require('mongoose');

const nameSchema = new mongoose.Schema({
  'name': {
    type: String,
    required: true
  },
  'type': {
    type: [String],
    required: true
  },
  'gender': {
    type: [String],
    required: true
  },
  'color': {
    type: [String],
    required: true
  },
  'qualities': {
    type: [String],
    required: true
  },
  'description': {
    type: String,
    required: true
  }
})

export default mongoose.model('petnames', nameSchema);
