var express = require('express');
var router = express.Router();
const firebase = require('firebase');

var config = {
  apiKey: "AIzaSyB6-MM2GPenEPXa8F4B2j-tIrMH9J11LAc",
  authDomain: "cogs121-app.firebaseapp.com",
  databaseURL: "https://cogs121-app.firebaseio.com",
  projectId: "cogs121-app",
  storageBucket: "cogs121-app.appspot.com",
  messagingSenderId: "115116152043"
};
firebase.initializeApp(config);
const database = firebase.database();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('viewInventory', {title: "View Inventory"});
});

router.get('/inventoryItem', (req, res) => {
  console.log(req.query);
  database.ref('items/'+req.query.id+'/'+req.query.type).on('value', (snapshot) => {
    const item = snapshot.val();
    console.log(item);
    res.render('inventoryItem', {
      queryItem: item
    });
  });
});
module.exports = router;
