const mongoose = require("mongoose")



const basketSchema = mongoose.Schema ({
    drugs: [{
        ref: "Drugs",
        type: mongoose.Schema.Types.ObjectId,
    }],
    user: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    },
    num: {
        type: Number,
        default: 0
    },
})

const Basket = mongoose.model("Basket", basketSchema)


module.exports = Basket