var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    name: "Adam",
    last: "Adamski"
  });
});

module.exports = router;
