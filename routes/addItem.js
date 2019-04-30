var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('addItem', {title: "Add Item"});
});

module.exports = router;
