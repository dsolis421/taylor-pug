var express = require('express');
const router = express.Router();
const totesController = require('../controllers/totesController');

/* GET home page. */
router.get('/', totesController.getPreviews);
/*GET adoption page*/
router.get('/adoption', totesController.getAdoption);
/*Get foster page*/
router.get('/foster', totesController.getFoster);
/*Get rescue partners page*/
router.get('/rescuepartner', totesController.getRescuePartners);

router.get('/stories/:id', totesController.getTestimonials);

router.get('/articles', totesController.getArticles);

router.get('/articles/:headline', totesController.getSingleArticle);

router.get('/blog', totesController.getBlog);

router.get('/blog/:headline', totesController.getBlogPost);

router.get('/petname', totesController.getPetNameApp);

router.get('/petname/:type/:gender/:color/:qualities', totesController.getSuggestName);

router.get('/rescuesearch/:zip',totesController.getRescueOrg);

module.exports = router;
