var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', {
    layout: false,
    style: 'login.css'
  });
});

module.exports = router;
