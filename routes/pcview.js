const express = require('express');
const router = express.Router();

router.get('/pcview1', function(req, res){
    res.render('../template/pcview1.html');
});

router.get('/pcview2', function(req, res){
    res.render('../template/pcview2.html');
});

router.get('/pcview3', function(req, res){
    res.render('../template/pcview3.html');
});

router.get('/pcviewmulti', function(req, res){
    res.render('../template/pcviewmulti.html');
});



module.exports = router;