import mongoose from 'mongoose';
//const mongoose = require('mongoose');
const quotes = mongoose.model('quotes');

exports.getHomePage = (req, res) => {
  res.render('index');
}

exports.getAdoption = (req, res, next) => {
  quotes.find({author: 'Danny S'}).exec()
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
