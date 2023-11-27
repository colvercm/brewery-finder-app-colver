const { Schema, model, models } = require('mongoose');

const brewerySchema = new Schema({
  brewery_name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  brewery_ID: {
    type: Number,
    required: true,
    unique: true
  },
  brewery_type: {
    type: String,
    required: true
  },
  location: {
    street: String,
    city: String,
    state: String,
    zip: Number,
    Country: String,
  },
  website: {
    type: String,
    required: true,
  },
});
 
module.exports = models.Breweries || model("Breweries", brewerySchema);
