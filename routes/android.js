const express = require('express');
const router = express.Router();

router.get('/android1', function(req, res){
    res.render('../template/android1.html');
});

router.get('/android2', function(req, res){
    res.render('../template/android2.html');
});

router.get('/android3', function(req, res){
    res.render('../template/android3.html');
});

router.get('/androidmulti', function(req, res){
    res.render('../template/androidmulti.html');
});



module.exports = router;