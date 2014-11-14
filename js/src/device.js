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