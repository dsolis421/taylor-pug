import express from 'express';
var router = express.Router();

/* GET partner page. */
router.get('/', (req, res, next) => {
  res.render('rescuepartner', { title: 'partner | totes pets' });
});

module.exports = router;
