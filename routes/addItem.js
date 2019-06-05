var express = require('express');
var router = express.Router();
const https = require('https');
const unirest = require('unirest');
const opts = {
  hostname: 'api.upcitemdb.com',
  path: '/prod/trial',
  method: 'GET',
  headers: {
    "Content-Type": "application/json"
  }
}

/* GET users listing. */
router.get('/upcLookup', (req, res) => {
  res.render('upcLookup', {title: "Add Item - UPC Lookup"});
});

router.get('/manualEntry', (req,res) => {
  res.render('addItemManual', {title: "Add Item - Manual Entry"});
});

router.post('/upcLookup', (req, res) => {
  unirest
  .get('https://api.upcitemdb.com/prod/trial/lookup?upc=' + req.query.upc)
  .headers({"Content-Type": "application/json"})
  .end(response => {
    if (response) {
      res.json(response);
    } else {
      console.log("Not a valid UPC code!");
      res.json({data: "Not a valid UPC code! Please try again."});
    }
  });
});

module.exports = router;
