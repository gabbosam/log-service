var express = require('express');
var router = express.Router();
var parseString = require('xml2js').parseString;

/* GET users listing. */
router.post('/', function(req, res, next) {
  var authkey = req.body.authkey;
  var header = req.body.header;
  parseString(header, function(err, result){
    header = result;
    //console.log(header.LogPrivacy.Header[0].Products[0]);
  });
  var data = req.body.data;
  parseString(data, function(err, result){
    data = result;
    //console.log(header.LogPrivacy.Data[0].RowID[0]);
  });
  res.json(
    {
      'authkey':authkey,
      'header':header,
      'data':data
    }
  );
});


module.exports = router;
