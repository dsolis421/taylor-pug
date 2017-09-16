import mongoose from 'mongoose';
//const mongoose = require('mongoose');
const quotes = mongoose.model('quotes');
const articles = mongoose.model('articles');

exports.getHomePage = (req, res) => {
  res.render('index');
}

exports.getAdoption = (req, res, next) => {
  //aggregate can get a random document from mongodb
  quotes.aggregate({$sample: {size: 1}}).exec()
  .then(testmnl => {
    console.log(testmnl);
    res.render('adoption', { title: 'adoption | totes pets', testmnl})
  })
  .catch(err => next(err));
}

exports.getFoster = (req, res) => {
  res.render('foster', { title: 'foster | totes pets'});
}

exports.getRescuePartners = (req, res) => {
  res.render('rescuepartner', { title: 'partners | totes pets'});
}

exports.getTestimonials = (req, res) => {
  quotes.find({ _id: req.params.id }).exec()
  .then(testmnl => {
    res.render('testimonials', { title: 'testimonials | totes pets', testmnl})
  })
  .catch(err => next(err));
}

exports.getSingleArticle = (req, res) => {
  articles.find({ quick: req.params.article }).exec()
  .then(article => {
    res.render('article', { title: 'news | totes pets', article })
  })
  .catch(err => next(err));
}

exports.getArticles = (req, res) => {
  articles.find().exec()
  .then(articles => {
    res.render('news', { title: 'news | totes pets', articles })
  })
  .catch(err => next(err));
}
