var express = require('express');
var router = express.Router();

/* GET adoption page. */
router.get('/', (req, res, next) => {
  res.render('adoption', { title: 'adoption | totes pets' });
});

module.exports = router;
