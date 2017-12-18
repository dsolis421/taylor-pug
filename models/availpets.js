var mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema({
  'fileSize': {
    type: String,
    required: false
  },
  'resolutionX': {
    type: String,
    required: false
  },
  'resolutionY': {
    type: String,
    required: false
  },
  'url': {
    type: String,
    required: false
  },
})

const pictureSchema = new mongoose.Schema({
  'originalUrl': {
    type: String,
    required: false
  },
  'largeUrl': {
    type: String,
    required: false
  },
  'smallUrl': {
    type: String,
    required: false
  },
  'fullsizeUrl': {
    type: String,
    required: false
  },
  'thumbnailUrl': {
    type: String,
    required: false
  },
  'mediaID': {
    type: String,
    required: false
  },
  'mediaOrder': {
    type: String,
    required: false
  },
  'lastUpdated': {
    type: String,
    required: false
  },
  'original': {
    type: sizeSchema,
    required: false
  },
  'large': {
    type: sizeSchema,
    required: false
  },
  'small': {
    type: sizeSchema,
    required: false
  }
})

const availpetsSchema = new mongoose.Schema({
  'orgID': {
    type: String,
    required: true
  },
  'animalID': {
    type: String,
    required: true
  },
  'status': {
    type: String,
    required: false
  },
  'lastUpdated': {
    type: String,
    required: false
  },
  'rescueID': {
    type: String,
    required: false
  },
  'name': {
    type: String,
    required: false
  },
  'summary': {
    type: String,
    required: false
  },
  'species': {
    type: String,
    required: false
  },
  'breed': {
    type: String,
    required: false
  },
  'primaryBreed': {
    type: String,
    required: false
  },
  'secondaryBreed': {
    type: String,
    required: false
  },
  'sex': {
    type: String,
    required: false
  },
  'mixed': {
    type: String,
    required: false
  },
  'dogs': {
    type: String,
    required: false
  },
  'cats': {
    type: String,
    required: false
  },
  'kids': {
    type: String,
    required: false
  },
  'declawed': {
    type: String,
    required: false
  },
  'housetrained': {
    type: String,
    required: false
  },
  'age': {
    type: String,
    required: false
  },
  'birthdate': {
    type: String,
    required: false
  },
  'specialNeeds': {
    type: String,
    required: false
  },
  'altered': {
    type: String,
    required: false
  },
  'size': {
    type: String,
    required: false
  },
  'sizeCurrent': {
    type: String,
    required: false
  },
  'sizePotential': {
    type: String,
    required: false
  },
  'sizeUOM': {
    type: String,
    required: false
  },
  'uptodate': {
    type: String,
    required: false
  },
  'color': {
    type: String,
    required: false
  },
  'coatLength': {
    type: String,
    required: false
  },
  'pattern': {
    type: String,
    required: false
  },
  'courtesy': {
    type: String,
    required: false
  },
  'found': {
    type: String,
    required: false
  },
  'foundDate': {
    type: String,
    required: false
  },
  'foundZipcode': {
    type: String,
    required: false
  },
  'animalLocation': {
    type: String,
    required: false
  },
  'killDate': {
    type: String,
    required: false
  },
  'killReason': {
    type: String,
    required: false
  },
  'description': {
    type: String,
    required: false
  },
  'descriptionPlain': {
    type: String,
    required: false
  },
  'trackerImageUrl': {
    type: String,
    required: false
  },
  'adoptionFee': {
    type: String,
    required: false
  },
  'okWithAdults': {
    type: String,
    required: false
  },
  'obedienceTraining': {
    type: String,
    required: false
  },
  'ownerExperience': {
    type: String,
    required: false
  },
  'exerciseNeeds': {
    type: String,
    required: false
  },
  'energyLevel': {
    type: String,
    required: false
  },
  'groomingNeeds': {
    type: String,
    required: false
  },
  'yardRequired': {
    type: String,
    required: false
  },
  'fence': {
    type: String,
    required: false
  },
  'shedding': {
    type: String,
    required: false
  },
  'newPeople': {
    type: String,
    required: false
  },
  'vocal': {
    type: String,
    required: false
  },
  'activityLevel': {
    type: String,
    required: false
  },
  'earType': {
    type: String,
    required: false
  },
  'eyeColor': {
    type: String,
    required: false
  },
  'tailType': {
    type: String,
    required: false
  },
  'olderKidsOnly': {
    type: String,
    required: false
  },
  'noSmallDogs': {
    type: String,
    required: false
  },
  'noLargeDogs': {
    type: String,
    required: false
  },
  'noFemaleDogs': {
    type: String,
    required: false
  },
  'noMaleDogs': {
    type: String,
    required: false
  },
  'oKForSeniors': {
    type: String,
    required: false
  },
  'hypoallergenic': {
    type: String,
    required: false
  },
  'goodInCar': {
    type: String,
    required: false
  },
  'leashtrained': {
    type: String,
    required: false
  },
  'cratetrained': {
    type: String,
    required: false
  },
  'fetches': {
    type: String,
    required: false
  },
  'playsToys': {
    type: String,
    required: false
  },
  'swims': {
    type: String,
    required: false
  },
  'lap': {
    type: String,
    required: false
  },
  'oKWithFarmAnimals': {
    type: String,
    required: false
  },
  'drools': {
    type: String,
    required: false
  },
  'apartment': {
    type: String,
    required: false
  },
  'noHeat': {
    type: String,
    required: false
  },
  'noCold': {
    type: String,
    required: false
  },
  'protective': {
    type: String,
    required: false
  },
  'escapes': {
    type: String,
    required: false
  },
  'predatory': {
    type: String,
    required: false
  },
  'hasAllergies': {
    type: String,
    required: false
  },
  'specialDiet': {
    type: String,
    required: false
  },
  'ongoingMedical': {
    type: String,
    required: false
  },
  'hearingImpaired': {
    type: String,
    required: false
  },
  'sightImpaired': {
    type: String,
    required: false
  },
  'obedient': {
    type: String,
    required: false
  },
  'playful': {
    type: String,
    required: false
  },
  'timid': {
    type: String,
    required: false
  },
  'skittish': {
    type: String,
    required: false
  },
  'independent': {
    type: String,
    required: false
  },
  'affectionate': {
    type: String,
    required: false
  },
  'eagerToPlease': {
    type: String,
    required: false
  },
  'intelligent': {
    type: String,
    required: false
  },
  'eventempered': {
    type: String,
    required: false
  },
  'gentle': {
    type: String,
    required: false
  },
  'goofy': {
    type: String,
    required: false
  },
  'pictures': {
    type: [pictureSchema],
    required: false
  },
  //video schema may be needed
  'videos': {
    type: [String],
    required: false
  },
  //video url schema may be required
  'videoUrls': {
    type: [String],
    required: false
  },
  'mediaLastUpdated': {
    type: String,
    required: false
  },
  'contactName': {
    type: String,
    required: false
  },
  'contactEmail': {
    type: String,
    required: false
  },
  'contactCellPhone': {
    type: String,
    required: false
  },
  'contactHomePhone': {
    type: String,
    required: false
  },
  'petUrl': {
    type: String,
    required: false
  },
  'messagePet': {
    type: String,
    required: false
  },
  'needsFoster': {
    type: String,
    required: false
  },
})
