var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('viewInventory', {title: "View Inventory"});
});

module.exports = router;
