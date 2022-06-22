const mongoose = require("mongoose")


const CategorieSchema = mongoose.Schema({
    name: String,
})


const Categorie = mongoose.model("Categorie", CategorieSchema)


module.exports = Categorie