const express = require('express')

const {home, createUser,getUsers,deleteUser,updateUser} = require("../controllers/userControllers.js")


const router  = express.Router()
router.get('/', home)
router.post('/createuser', createUser)
router.get('/getusers', getUsers)
router.delete('/deleteuser/:id', deleteUser)
// find diff about put and patch 
router.put('/updateuser/:id',updateUser)




module.exports = router