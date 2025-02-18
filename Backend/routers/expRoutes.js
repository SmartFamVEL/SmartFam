const express=require('express');

const router=express.Router();
const expenseController = require("../Controller/Exp");
const {tokenDecode} = require('../middlewares/tokenDecode')

router.post('/addExp', tokenDecode, expenseController.AddExp);
router.get('/getExp',tokenDecode,expenseController.GetExp);
router.delete('/deleteExp/:id',tokenDecode,expenseController.DeleteExp);

module.exports=router;