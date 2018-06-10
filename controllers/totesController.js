var mongoose = require('mongoose');
//const mongoose = require('mongoose');
const quotes = mongoose.model('quotes');
const articles = mongoose.model('articles');
const petnames = mongoose.model('petnames');
const rescueorgs = mongoose.model('rescueorgs');
const gallerycol = mongoose.model('gallery');

exports.getAdoption = (req, res) => {
  //aggregate can get a random document from mongodb
  quotes.aggregate({$sample: {size: 1}}).exec()
  .then(testmnl => {
    console.log(testmnl);
    res.render('adoption', { title: 'adoption | totes pets', testmnl});
  })
  .catch(err => {
    next(err);
  });
}

exports.getAmplifyATX = (req, res) => {
  res.render('amplifyatx', { title: 'totes pets | amplify atx'});
}

exports.getRescuePartners = (req, res) => {
  res.render('rescuepartner', { title: 'totes pets | rescue partners'});
}

exports.getAboutUs = (req, res) => res.render('aboutus', {title: 'totes pets | about us'});

exports.getTestimonials = (req, res) => {
  quotes.find({ _id: req.params.id }).exec()
  .then(testmnl => {
    res.render('stories', { title: 'totes pets | stories', testmnl});
  })
  .catch(err => {
    next(err);
  });
}

exports.getSingleArticle = (req, res) => {
  articles.find({ quick: req.params.headline }).exec()
  .then(article => {
    console.log(article);
    res.render('newsarticle', { title: 'totes pets | ' + article[0].headline, article });
  })
  .catch(err => {
    next(err);
  });
}

exports.getArticles = (req, res) => {
  articles.find({ type: "article", show: "y" }).sort({ order: -1 }).exec()
  .then(articles => {
    res.render('articles', { title: 'totes pets | articles', articles });
  })
  .catch(err => {
    next(err);
  });
}

exports.getBlogPost = (req, res) => {
  articles.find({ quick: req.params.headline }).exec()
  .then(post => {
    res.render('blogpost', { title: 'totes pets | ' + post[0].headline, post });
  })
  .catch(err => {
    next(err);
  });
}

exports.getBlog = (req, res) => {
  articles.find({ type: "blog", show: "y" }).sort({ order: -1 }).exec()
  .then(posts => {
    res.render('blog', { title: 'totes pets | blog', posts });
  })
  .catch(err => {
    next(err);
  });
}

exports.getGallery = (req, res) => {
  res.redirect('/gallery/1');
}

exports.getGallerySet = (req, res) => {
  gallerycol.find({ show: "y" }).exec()
  .then(galleryset => {
    console.log(galleryset);
    res.render('gallery', { title: 'totes pets | gallery', galleryset });
  })
  .catch(err => {
    next(err);
  });
}

exports.getPreviews = (req, res) => {
  var previews = {a: undefined, b: undefined};
  articles.find({ type: "article", show: "y" }).sort({ order: -1}).limit(1).exec()
  .then(apreview => {
    console.log(apreview);
    previews.a = apreview;
  })
  .then(() => {
    articles.find({ type: "blog", show: "y" }).sort({ order: -1}).limit(1).exec()
    .then(bpreview => {
      console.log(bpreview)
      previews.b = bpreview;
      console.log(previews);
      res.render('index',{ title: 'totes pets', previews });
    })
    .catch(err => next(err));
  })
  .catch(err => {
    next(err);
  });
}

exports.getPetNameApp = (req, res) => {
  res.render('petname', { title: 'totes pets | pet names' });
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
    res.render('suggestname', { title: 'totes pets | ' + name[0].name, name});
  })
  .catch(err => {
    console.log('getSuggestName: ',err);
    next(err);
  });
}

exports.getRescueOrg = (req, res) => {
  rescueorgs.find({ zip: req.params.zip }).exec()
  .then(shelters => {
    console.log(shelters);
  })
  .catch(err => {
    console.log('getRescueOrg: ',err);
    next(err);
  });
}
