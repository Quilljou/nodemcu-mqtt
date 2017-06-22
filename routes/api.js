var express = require('express');
var router = express.Router();
const querystring = require('querystring');


const template = (status,message,data = null) => {
  return {
    message,
    status,
    data
  }
}

const getMessage = (m) => {
  m = querystring.stringify(m)
  let message = {
    topic: 'micropython',
    payload: m,
    qos: 1,
    retain: false
  }
  return message;
}


/* GET users listing. */
router.post('/stop', function(req, res, next) {
  mqtt.publish(getMessage({
    type: 'stop',
    payload: 0
  }), function() {
    res.json(template(true,'success'))
  })
});

router.post('/positive', function(req, res, next) {
  mqtt.publish(getMessage({
    type: 'positive',
    payload: req.body.speed
  }), function() {
    res.json(template(true,'success'))
  })
});

router.post('/negetive', function(req, res, next) {
  mqtt.publish(getMessage({
    type: 'negetive',
    payload: req.body.speed
  }), function() {
    res.json(template(true,'success'))
  })
});

router.post('/speed', function(req, res, next) {
  mqtt.publish(getMessage({
    type: 'speed',
    payload: req.body.speed
  }), function() {
    res.json(template(true,'success'))
  })
})

module.exports = router;
