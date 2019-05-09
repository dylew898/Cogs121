var express = require('express');
var router = express.Router();
const https = require('https');
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
  res.render('addItem', {title: "Add Item"});
});

router.get('/upcLookup', (req, res) => {
  res.render('upcLookup', {title: "Add Item - UPC Lookup"});
});

router.get('/manualEntry', (req,res) => {
  res.render('addItemManual', {title: "Add Item - Manual Entry"});
});

router.post('/upcLookup', (req, res) => {
  $.ajax({
    url: 'https://api.upcitemdb.com/prod/trial/lookup?upc=' + req,
    type: 'GET',
    dataType: 'json',
    success: (data) => {
      console.log(data);
      res.send(data);
    }
  });
});

module.exports = router;
