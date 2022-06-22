const mongoose = require("mongoose")


const drugSchema = mongoose.Schema ({
    name: String,
    price: Number,
    recipe: Boolean,
    drugCategories: {
        ref: "Caregori",
        type: mongoose.Schema.Types.ObjectId
    }
})


const Drugs = mongoose.model("Drugs", drugSchema)


module.exports = Drugs