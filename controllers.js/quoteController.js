import quotes from '../models/quotes';

const quoteController = {};

quoteController.getRandomQuote = (req, res, next) => {
  quotes.find().limit(3).skip(_rand() * quotes.count())
  .then(testmls => res.json(testmls))
  .catch(err => next(err));
}

export default quoteController;
