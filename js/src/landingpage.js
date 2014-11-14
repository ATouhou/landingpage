var Device = require('./Device');
var Landingpage = {};

var root = $('html');
root.removeClass('no-js');

var device = new Device(navigator.userAgent);
var deviceClasses = device.getDeviceClasses();

deviceClasses.forEach(function (item){ root.addClass(item); });

Landingpage.init = function () {
	$(document).foundation();
	$(function () {});
};

Landingpage.init();


module.exports = Landingpage;
