const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
  {
    first_name: { type: String, required: true, maxLength: 100 },
    family_name: { type: String, required: true, maxLength: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
  },
  { timestamps: true }
);

// Virtual for author’s full name
AuthorSchema.virtual("name").get(function () {
  return `${this.first_name} ${this.family_name}`;
});

// Virtual for author’s lifespan
AuthorSchema.virtual("lifespan").get(function () {
  let birth = this.date_of_birth
    ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED)
    : "";
  let death = this.date_of_death
    ? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED)
    : "";
  return `${birth} - ${death}`;
});

// Virtual for URL
AuthorSchema.virtual("url").get(function () {
  return `/catalog/author/${this._id}`;
});

module.exports = mongoose.model("Author", AuthorSchema);
