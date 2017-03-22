var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');


router.get('/api/hotel', function(req, res, next) {
  console.log('hello1');
  Hotel.findAll()
  .then(function(dbHotels) {
    res.json(dbHotels)
  })
  .catch(next);
});

router.get('/api/restaurant', function(req, res, next) {
  console.log('hello2');
  Restaurant.findAll()
  .then(function(dbRetaurants) {
    res.json(dbRetaurants)
  })
  .catch(next);
});

router.get('/api/activity', function(req, res, next) {
   console.log('hello3');
   Activity.findAll()
  .then(function(dbActivities) {
    res.json(dbActivities)
  })
  .catch(next);
});


router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
});

module.exports = router;
