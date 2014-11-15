(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Device = function (userAgent) {
    this.userAgent = userAgent;
    this.deviceClasses = [];

    this.isIpad = function () {
        return Boolean(this.userAgent.match(/iPad/));
    };

    this.isIPhone = function () {
        return Boolean(this.userAgent.match(/iPhone/));
    };

    this.isAndroid = function () {
        return Boolean(this.userAgent.match(/Android/));
    };

    this.isAndroidPhone = function () {
        return Boolean(this.userAgent.match(/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i));
    };

    this.isAndroidTablet = function () {
        return this.isAndroid() && !this.isAndroidPhone();
    };

    this.isPlayBook = function () {
        return Boolean(this.userAgent.match(/PlayBook/));
    };

    this.isWindowsPhone = function () {
        return Boolean(this.userAgent.match(/(Windows Phone OS|Windows CE|Windows Mobile)/));
    };

    this.isWindowsTablet = function () {
        return Boolean(this.userAgent.match(/(?=.*\bWindows\b)(?=.*\bARM\b)/i));
    };

    this.isKindle = function () {
        return Boolean(this.userAgent.match(/Silk/));
    };

    this.isWindows = function () {
        return Boolean(this.userAgent.match(/Windows/));
    };

    this.isMacOSX = function () {
        return Boolean(this.userAgent.match(/Mac OS X/));
    };

    this.isLinux = function () {
        return Boolean(this.userAgent.match(/Linux/)) && !this.isAndroid() && !this.isKindle();
    };

    this.isBlackBerry = function () {
        return Boolean(this.userAgent.match(/RIM|BB10/)) || this.isPlayBook();
    };

    this.isDesktop = function () {
        return (this.isWindows() || this.isMacOSX() || this.isLinux()) && !this.isWindowsPhone();
    };

    this.isMobile = function () {
        return !this.isDesktop() && (this.isIPhone() || this.isAndroidPhone() || this.isWindowsPhone());
    };

    this.isTablet = function () {
        return this.isIpad() || this.isAndroidTablet() || this.isWindowsTablet() || this.isPlayBook();
    };

    this.isTouchDevice = function () {
        return this.isTablet() || this.isMobile();
    };

    this._setDeviceClasses = function () {

        if (this.isTouchDevice()) {
            this.deviceClasses.push('touch');
        }

        if (this.isIpad()) {
            this.deviceClasses.push('ipad');
        }

        if (this.isIPhone()) {
            this.deviceClasses.push('iphone');
        }

        if (this.isAndroid()) {
            this.deviceClasses.push('android');
        }

        if (this.isPlayBook()) {
            this.deviceClasses.push('playbook');
        }

        if (this.isBlackBerry()) {
            this.deviceClasses.push('blackberry');
        }

        if (this.isKindle()) {
            this.deviceClasses.push('kindle');
        }

        if (this.isAndroidPhone()) {
            this.deviceClasses.push('android-phone');
        }

        if (this.isAndroidTablet()) {
            this.deviceClasses.push('android-tablet');
        }

        if (this.isWindowsPhone()) {
            this.deviceClasses.push('windows-phone');
        }

        if (this.isWindowsTablet()) {
            this.deviceClasses.push('windows-tablet');
        }

        if (this.isWindows()) {
            this.deviceClasses.push('windows');
        }

        if (this.isMacOSX()) {
            this.deviceClasses.push('macosx');
        }

        if (this.isLinux()) {
            this.deviceClasses.push('linux');
        }

        if (this.isDesktop()) {
            this.deviceClasses.push('desktop');
        }

        if (this.isMobile()) {
            this.deviceClasses.push('mobile');
        }

        if (this.isTablet()) {
            this.deviceClasses.push('tablet');
        }

    };

    this.getDeviceClasses = function () {
        this._setDeviceClasses();
        return this.deviceClasses;
    };


};

module.exports = Device;
},{}],2:[function(require,module,exports){
module.exports=require(1)
},{"/Users/hising/www/landingpage/js/src/Device.js":1}],3:[function(require,module,exports){
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

},{"./Device":1}]},{},[2,3]);
