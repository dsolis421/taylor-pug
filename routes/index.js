import express from 'express';
const router = express.Router();
const totesController = require('../controllers/totesController');

/* GET home page. */
router.get('/', totesController.getHomePage);
/*GET adoption page*/
router.get('/adoption', totesController.getAdoption);
/*Get foster page*/
router.get('/foster', totesController.getFoster);
/*Get rescue partners page*/
router.get('/rescuepartner', totesController.getRescuePartners);

router.get('/testimonials/:id', totesController.getTestimonials);

router.get('/news', totesController.getArticles);

router.get('/news/:article', totesController.getSingleArticle);

module.exports = router;
