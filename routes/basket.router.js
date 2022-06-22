const { Router } = require("express")

const router = Router()


const { basketController } = require("../controllers/basket.controller")


router.post("/user/basket", basketController.postBasket)
router.patch("/user/basket/deleteDrug/:id", basketController.deleteDrug);
router.patch("/user/basket/cleanDrug/:id", basketController.clearBasket)
router.patch("/user/basket/addDrug/:id", basketController.addDrug)


module.exports = router