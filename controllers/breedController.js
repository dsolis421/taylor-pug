import breeds from '../models/breeds';

const breedController = {};

breedController.getBreed = (req, res, next) => {
  breeds.find({size: req.params.size}).exec()
  .then(breed => res.json(breed))
  .catch(err => next(err));
};

export default breedController;
