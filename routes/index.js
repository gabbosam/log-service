var express = require('express');
var router = express.Router();
var parseString = require('xml2js').parseString;
var xorCrypto = require('xorcrypto');


router.post('/', function(req, res, next){
  var myXorCrypto = new xorCrypto(Buffer.from('L')); //crapy fro Lynfa
  var value, encrypted, decrypted;
  /*value = Buffer.from('This is my secret message!');

  encrypted = myXorCrypto.encrypt(value);
  //console.log(encrypted.toString());
  decrypted = myXorCrypto.decrypt(encrypted);
  //console.log(decrypted.toString());
  */

  req.body.header = myXorCrypto.decrypt(Buffer.from(req.body.header));
  req.body.data = myXorCrypto.decrypt(Buffer.from(req.body.data));

  next();
});

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
