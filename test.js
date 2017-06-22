var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://127.0.0.1:8173')

client.on('connect', function () {
  console.log('connected to the server');
  client.subscribe('/abc')
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})
