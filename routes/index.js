var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  var authkey = req.body.authkey;
  var header = req.body.header;
  var data = req.body.data;
  res.json(
    {
      'authkey':authkey,
      'header':header,
      'data':data
    }
  );
});


module.exports = router;
