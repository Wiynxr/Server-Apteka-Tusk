const { json, get } = require("express/lib/response");
const Drugs = require("../Models/Drugs.model")


module.exports.drugsController = {
    postDrug: async(req, res) => {
        const AddDrug = await Drugs.create({
            name: req.body.name,
            price: req.body.price,
            recipe: req.body.recipe
        })
        res.json(AddDrug)
    },
    deleteDrug: async (req, res) => {
        const deleteDrug = await Drugs.findByIdAndRemove(req.params.id);
        res.json(deleteDrug)
    },
    getDrug: async (req, res) => {
        const getDrug = await Drugs.find();
        res.json(getDrug)
    },
    updateDrug: async (req, res) => {
        const upDrug = await Drugs.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            price: req.body.price,
            recipe: req.body.recipe
        })
        res.json(upDrug)
    },
    getDrugById: async (req, res) => {
        const getById = await Drugs.findById(req.params.id);
        res.json(getById)
    }
}