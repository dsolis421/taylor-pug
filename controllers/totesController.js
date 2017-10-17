var mongoose = require('mongoose');
//const mongoose = require('mongoose');
const quotes = mongoose.model('quotes');
const articles = mongoose.model('articles');
const petnames = mongoose.model('petnames');

/*exports.getHomePage = (req, res) => {
  res.render('index', { title: 'totes pets' });
}*/

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
    res.render('stories', { title: 'stories | totes pets', testmnl})
  })
  .catch(err => next(err));
}

exports.getSingleArticle = (req, res) => {
  articles.find({ quick: req.params.headline }).exec()
  .then(article => {
    res.render('headline', { title: 'articles | totes pets', article })
  })
  .catch(err => next(err));
}

exports.getArticles = (req, res) => {
  articles.find({ type: "article" }).sort({ order: -1 }).exec()
  .then(articles => {
    res.render('articles', { title: 'articles | totes pets', articles })
  })
  .catch(err => next(err));
}

exports.getBlogPost = (req, res) => {
  articles.find({ quick: req.params.headline }).exec()
  .then(post => {
    res.render('blogpost', { title: 'blog | totes pets', post })
  })
  .catch(err => next(err));
}

exports.getBlog = (req, res) => {
  articles.find({ type: "blog" }).sort({ order: -1 }).exec()
  .then(posts => {
    res.render('blog', { title: 'blog | totes pets', posts })
  })
  .catch(err => next(err));
}

exports.getPreviews = (req, res) => {
  var previews = {a: undefined, b: undefined};
  articles.find({ type: "article" }).sort({ order: -1}).limit(1).exec()
  .then(apreview => {
    console.log(apreview);
    previews.a = apreview;
  })
  .then(() => {
    articles.find({ type: "blog" }).sort({ order: -1}).limit(1).exec()
    .then(bpreview => {
      console.log(bpreview)
      previews.b = bpreview;
      console.log(previews);
      res.render('index',{ title: 'totes pets', previews });
    })
    .catch(err => next(err));
  })
  .catch(err => next(err));
}

exports.getPetNameApp = (req, res) => {
  res.render('petname', { title: 'name | totes pets' });
}

exports.getSuggestName = (req, res) => {
  var typearray = req.params.type.split(",");
  var genderarray= req.params.gender.split(",");
  var colorarray = req.params.color.split(",");
  var qualityarray = req.params.qualities.split(',');
  petnames.find({ type: { $in: typearray},
    gender: { $in: genderarray },
    color: { $in: colorarray},
    qualities: { $in: qualityarray }}).exec()
  .then(name => {
    console.log(name);
    res.render('suggestname', { title: 'name | totes pets', name});
  })
  .catch(err => {
    console.log('getSuggestName',err);
    next(err);
  });
}
