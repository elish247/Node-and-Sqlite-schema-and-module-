const userController=require("../controllers/usercontroller");

const router=require("express").Router()

router.post("/addUser",userController.addUser)
router.get("/getUser",userController.getAllUsers)

// update by particular id
router.put("/updateUser/:id",userController.updateUsers)

// delete by particular id
router.delete("/deleteUser/:id",userController.deleteUsers)


module.exports=router;