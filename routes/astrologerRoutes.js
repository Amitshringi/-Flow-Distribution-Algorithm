const express= require('express');
const router=express.Router();

const {addAstrologer, distribute, toggleAstrologer, deleteAllData}= require('../controllers/astrologerController');

router.post('/astrologers', addAstrologer);
router.post('/distribute', distribute);
router.post('/astrologers/:id/toggle-top', toggleAstrologer);
router.delete('/delete-all', deleteAllData);

module.exports=router;