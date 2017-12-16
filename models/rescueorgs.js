var mongoose = require('mongoose');

const sheltersSchema = new mongoose.Schema({
  'orgID': {
    type: String,
    required: true
  },
  'status': {
    type: String,
    required: false
  },
  'name': {
    type: String,
    required: false
  },
  'address': {
    type: String,
    required: false
  },
  'city': {
    type: String,
    required: false
  },
  'state': {
    type: String,
    required: false
  },
  'zip': {
    type: String,
    required: false
  },
  'country': {
    type: String,
    required: false
  },
  'phone': {
    type: String,
    required: false
  },
  'fax': {
    type: String,
    required: false
  },
  'email': {
    type: String,
    required: false
  },
  'orgurl': {
    type: String,
    required: false
  },
  'facebookUrl': {
    type: String,
    required: false
  },
  'orgType': {
    type: String,
    required: false
  },
  'orgSpecies': {
    type: String,
    required: false
  },
  'serveAreas': {
    type: String,
    required: false
  },
  'adoptionProcess': {
    type: String,
    required: false
  },
  'about': {
    type: String,
    required: false
  },
  'meetPets': {
    type: String,
    required: false
  },
  'services': {
    type: String,
    required: false
  },
  'allowAppSubmissions': {
    type: String,
    required: false
  }
  'messageOrg': {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('rescueorgs', sheltersSchema);
