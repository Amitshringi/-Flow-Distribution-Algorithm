const express=require('express');
const router=express.Router();

const {addUser}=require('../controllers/astrologerController');

router.post('/users', addUser);

module.exports=router;