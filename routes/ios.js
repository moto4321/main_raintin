const express = require('express');
const router = express.Router();

router.get('/ios1', function(req, res){
    res.render('../template/ios1.html');
});

router.get('/ios2', function(req, res){
    res.render('../template/ios2.html');
});

router.get('/ios3', function(req, res){
    res.render('../template/ios3.html');
});

router.get('/iosmulti', function(req, res){
    res.render('../template/iosmulti.html');
});



module.exports = router;