var express = require('express');
var router = express.Router();
var db = require ('./db');

/* GET users listing. */
router.get('/', function(req, res, next) {
   var _db = new db.DBAccess();
    var d = _db.getData(req.query).then (data =>{
            res.send(data);
    })
});

module.exports = router;