var express = require('express');
var router = express.Router();
// var session = require('express-session');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

// router.get('/', (req, res) => {
//     res.render('function.html');
// });
router.get('/', function(req, res){
        res.render('../main.html');
    // if(req.session){ // 로그인 돼있음
        
    // } else { // 로그인 안돼있음
    //     res.render('../index.html');
    // }
    // res.sendFile('../index.html');
});

module.exports = router;