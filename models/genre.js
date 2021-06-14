var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: String, required: true, maxLength: 3, maxLength: 100},
    book: [{type: Schema.Types.ObjectId, ref: 'Book'}]
  }
);

// Virtual for book's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);