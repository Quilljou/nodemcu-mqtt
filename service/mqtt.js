var mosca = require('mosca');


var moscaSettings = {
  port: 8173,			//mosca (mqtt) port
};

var mqtt = new mosca.Server(moscaSettings);

mqtt.on('ready', () => {
  console.log('Mqtt server is ready!')
});




mqtt.on('clientConnected', function(client) {
  console.log('Client Connected:', client.id);
});


mqtt.on('published', function(packet, client) {
  console.log('Published', packet.payload);

});

mqtt.on('clientDisconnected', function(client) {
  console.log('Client Disconnected:', client.id);
});



module.exports =  mqtt;
