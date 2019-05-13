var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('viewInventory', { 
    title: 'Inventory App'
  });
});

module.exports = router;
