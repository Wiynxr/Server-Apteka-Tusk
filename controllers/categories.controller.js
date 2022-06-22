const Categorie = require("../models/Categori.model")

module.exports.categorieController = {
    postCategorie: async(req, res) => {
        const newCateg = await Categorie.create ({
            name: req.body.name
        })
        res.json(newCateg)
    },
    deleteCategorie: async (req, res) => {
        const delCateg = await Categorie.findByIdAndRemove(req.params.id);
        res.json(delCateg)
    },
    patchCategorie: async(req, res) => {
        const updateCateg = await Categorie.findByIdAndUpdate(req.params.id, {
            name: req.body.name
        })
        res.json(updateCateg)
    },
    getCategorie: async (req, res) => {
        const allCateg = await Categorie.find();
        res.json(allCateg)
    },
}