import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  'quote' : {
    type: String,
    required: true
  },
  'author' : {
    type: String,
    required: true
  }
});

export default mongoose.model('quotes', quoteSchema);
