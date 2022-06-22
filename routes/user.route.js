const { Router } = require("express")


const router = Router()


const { userController } = require("../controllers/users.controller")


router.post("/user", userController.postUser)
router.delete("/user/:id", userController.deleteUser)
router.get("/users", userController.getUser)
router.patch("/user/:id", userController.updateUser)
router.get("/user/:id", userController.getUserById)

module.exports = router
