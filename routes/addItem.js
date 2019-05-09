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

var req = https.request(opts, function(res) {
  console.log('statusCode: ', res.statusCode);
  console.log('headers: ', res.headers);
  res.on('data', function(d) {
    console.log('BODY: ' + d);
  })
})
req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
})
req.write('{ "upc": "4002293401102" }')
req.end()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('addItemOptions', {title: "Add Item"});
});

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
