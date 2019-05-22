var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('updateExisting', {
    title: 'Add Quantity to Existing Item'
  });
});

module.exports = router;
