const { Router } = require("express")

const router = Router()


const { categorieController } = require("../controllers/categories.controller")


router.post("/categorie", categorieController.postCategorie)
router.get("/categories", categorieController.getCategorie)
router.patch("/categorie/:id", categorieController.patchCategorie)
router.delete("/categories/:id", categorieController.deleteCategorie)

module.exports = router