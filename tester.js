var usbScanner = require('./usbscanner').usbScanner;
var getDevices = require('./usbscanner').getDevices;

//get array of attached HID devices
var connectedHidDevices = getDevices()

//print devices
console.log(connectedHidDevices)

//initialize new usbScanner - takes optional parmeters vendorId and hidMap - check source for details
var scanner = new usbScanner({vendorId:7851});

//scanner emits a data event once a barcode has been read and parsed
scanner.on("data", function(code){
	console.log("recieved code : " + code);
});
