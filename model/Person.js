const mongoose = require('mongoose')
const { Schema } = mongoose;

const PersonSchema = new Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  favoriteFoods: [String],
  vegan: Boolean

});

const Person = mongoose.model('Person', PersonSchema);
module.exports = Person