var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Item = new Schema({
  name: {
    type: String
  },
  sortie: {
    type: Number
  },
  langue: {
    type: String
  }
  ,
  nomR: {
    type: String
  }
  ,
  dateN: {
    type: Date
  }
  ,
  nationalite: {
    type: String
  }
  ,
  genre: {
    type: String
  },
  note: {
    type: Number
  }
  
},{
	collection: 'items'
});

module.exports = mongoose.model('Item', Item);
