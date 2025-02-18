const express=require('express');

const router=express.Router();
const userController=require('../Controller/user');

router.post('/Adduser',userController.AddNewUser);
router.post('/getUser',userController.LoginUser);
router.get('/getdata/:email',userController.GetUser);
router.put('/updateUser/:email',userController.UpdateUser);

module.exports=router;