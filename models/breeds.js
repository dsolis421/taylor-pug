import mongoose from 'mongoose';

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

export default mongoose.model('breeds', breedSchema);
