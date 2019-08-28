const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('responding with a resource');
});

module.exports = router;