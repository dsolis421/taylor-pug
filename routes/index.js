var express = require('express');
const router = express.Router();
const totesController = require('../controllers/totesController');

/* GET home page. */
router.get('/', totesController.getPreviews);
/*GET adoption page*/
router.get('/adoption', totesController.getAdoption);

//amplify atx page currently not needed
//router.get('/amplifyatx', totesController.getAmplifyATX);

/*Get rescue partners page*/
router.get('/rescue-partner', totesController.getRescuePartners);

router.get('/rescue-stories', totesController.getRescueStories);

router.get('/instagram', totesController.getInstagramLinks);

router.get('/stories/:id', totesController.getTestimonials);

router.get('/articles', totesController.getArticles);

router.get('/articles/:headline', totesController.getSingleArticle);

router.get('/blog', totesController.getBlog);

router.get('/blog/:headline', totesController.getBlogPost);

router.get('/gallery', totesController.getGallery);

router.get('/gallery/:page', totesController.getGallerySet);

router.get('/petname', totesController.getPetNameApp);

router.get('/petname/:type/:gender/:color/:qualities', totesController.getSuggestName);

router.get('/rescuesearch/:zip',totesController.getRescueOrg);

router.get('/aboutus', totesController.getAboutUs);

module.exports = router;
