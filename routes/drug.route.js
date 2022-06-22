const { Router } = require("express")

const router = Router()

const { drugsController } = require("../controllers/drugs.controller")


router.post("/drug", drugsController.postDrug)
router.delete("/drug/:id", drugsController.deleteDrug)
router.patch("/drug/:id", drugsController.updateDrug)
router.get("/drugs"/ drugsController.getDrug)
router.get("/drug/:id", drugsController.getDrugById)

module.exports = router