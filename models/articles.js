import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
  'subheader': {
    type: String,
    required: false
  },
  'text': {
    type: [String],
    required: true
  }
})

const articleSchema = new mongoose.Schema({
  'type' : {
    type: String,
    required: true
  },
  'headline' : {
    type: String,
    required: true
  },
  'quick' : {
    type: String,
    required: true
  },
  "date" : {
    type: String,
    required: true
  },
  'story' : {
    type: [storySchema],
    required: true
  },
  'author' : {
    type: String,
    required: false
  },
  'order' : {
    type: Number,
    required: true
  }
})

export default mongoose.model('articles', articleSchema);
