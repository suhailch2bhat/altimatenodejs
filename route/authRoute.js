const express =require('express');
const router=express.Router();
router.post('./register',async function(req,res){
    console.log(req.body);
    res.send('ok')
})
router.post('./login',async function(req,res){
    console.log(req.body);
    res.send('ok')
})
module.exports=router;