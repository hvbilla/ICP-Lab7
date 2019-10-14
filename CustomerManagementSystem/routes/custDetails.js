var express = require('express');
var router = express.Router();
var CustDetails = require('../models/CustDetails.js');

/* GET ALL BOOKS */
router.get('/', function (req, res, next) {
  CustDetails.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function (req, res, next) {
  CustDetails.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function (req, res, next) {
  CustDetails.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next){
  CustDetails.findByIdAndUpdate(req.params.id, req.body, function (err, post){
    if (err) return next(err);
    res.json(post);
  })
})

/* DELETE BOOK */
router.delete('/:id', function(req, res, next){
  CustDetails.findByIdAndDelete(req.params.id, function (err, post){
    if (err) return next(err);
    res.json(post);
  })
})
module.exports = router;
