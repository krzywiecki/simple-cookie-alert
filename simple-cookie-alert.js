SimpleCookieAlert = function(userSettings) {
    'use strict';

    var self = this;

    var template = '<div id="simple-cookie-alert" class="simple-cookie-alert"><div class="simple-cookie-alert-container"><div class="simple-cookie-alert-icon-wrapper"><svg enable-background="new 0 0 64 64" height="64px" id="COOKIE" version="1.1" viewBox="0 0 64 64" width="64px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="COOKIE_1_"><path d="M32,16c-0.396,0-0.801,0.019-1.233,0.058c0.137,0.588,0.206,1.189,0.206,1.799   c0.001,2.135-0.83,4.144-2.342,5.656c-1.078,1.078-2.4,1.811-3.86,2.143c-0.898,3.892-4.672,6.653-8.769,6.14   C16.001,31.863,16,31.932,16,32c0,8.822,7.178,16,16,16s16-7.178,16-16S40.822,16,32,16z" fill="#D5944B"/><circle cx="35.709" cy="22.973" fill="#443017" r="2"/><circle cx="41.875" cy="29.417" fill="#443017" r="2"/><circle cx="31.709" cy="31.417" fill="#443017" r="2"/><circle cx="24.001" cy="37.25" fill="#443017" r="2"/><circle cx="32" cy="42.292" fill="#443017" r="2"/><circle cx="38.875" cy="37.25" fill="#443017" r="2"/><path d="M32,50c-9.925,0-18-8.075-18-18c0-0.505,0.034-1.001,0.074-1.494c0.024-0.298,0.181-0.569,0.427-0.74   c0.245-0.17,0.552-0.221,0.842-0.142c3.594,1.016,7.107-1.47,7.578-4.963c0.061-0.446,0.412-0.798,0.858-0.857   c1.308-0.175,2.496-0.765,3.438-1.705c1.133-1.134,1.757-2.641,1.756-4.241c0-0.78-0.15-1.542-0.447-2.266   c-0.117-0.284-0.097-0.606,0.055-0.873s0.417-0.45,0.721-0.496C30.309,14.071,31.166,14,32,14c9.925,0,18,8.075,18,18   S41.925,50,32,50z M16.002,31.795C16.001,31.863,16,31.932,16,32c0,8.822,7.178,16,16,16s16-7.178,16-16s-7.178-16-16-16   c-0.396,0-0.801,0.019-1.233,0.058c0.137,0.588,0.206,1.189,0.206,1.799c0.001,2.135-0.83,4.144-2.342,5.656   c-1.078,1.078-2.4,1.811-3.86,2.143C23.872,29.547,20.099,32.309,16.002,31.795z" fill="#26251D"/></g></svg></path></div><div class="simple-cookie-alert-text-wrapper"><p data-text="" class="simple-cookie-alert-text"></p></div><div class="simple-cookie-alert-button-wrapper"><button class="simple-cookie-alert-accept-button" data-role="accept-button"></button></div></div>';
    var el = document.createElement('div');
    var acceptButton;
    var themes;

    var settings = {
        text: 'This website uses cookies to ensure you get the best experience on our website.',
        readMoreLink: null,
        readMoreText: null,
        acceptButtonText: 'OK',
        theme: 'dark',
        position: 'bottom',
        backgroundOpacity: 0.85
    };

    this.defineTheme = function(settings) {
        themes = {
            dark: {
                'primary-color': 'color: #D5944B',
                'cookieIconColor': '#D5944B',
                'simple-cookie-alert': 'z-index: 9999;width: 100%;position:fixed;left:0;background:rgba(0, 0, 0, ' + settings.backgroundOpacity + ');color: #ffffff;',
                'simple-cookie-alert-container': 'max-width: 1200px;display:block;vertical-align:top;margin:0 auto;',
                'simple-cookie-alert-icon-wrapper': 'width: 6%;min-width:70px;float:left;text-align:center;',
                'simple-cookie-alert-text-wrapper': 'width: 80%;padding:20px 2%;float:left;vertical-align:top;',
                'simple-cookie-alert-text': 'margin: 0;color: #ffffff;',
                'simple-cookie-alert-button-wrapper': 'width: 6%;float:left;vertical-align:top;padding: 20px 2%;text-align:center;',
                'simple-cookie-alert-accept-button': 'font-size: 14px;cursor: pointer;padding: 3px 10px;border: 1px solid #666666; border-radius: 1px;background: #313131; color: #F4F4F4;'
            }
        };
    };

    this.overrideSettings = function() {
        for(var key in userSettings) {
            settings[key] = userSettings[key];
        }

        self.defineTheme(settings);
    };

    this.createProperReadMoreLink = function() {
        if(settings.readMoreLink != null && settings.readMoreText != null) {
            var readMoreEl = '<a target="_blank" class="primary-color" href="' + settings.readMoreLink + '">' + settings.readMoreText + '</a>';
        }
        else {
            var readMoreEl = '';
        }

        el.querySelector('[data-text=""]').innerHTML = settings.text + readMoreEl;
    };

    this.acceptButtonHandler = function() {
        acceptButton = el.querySelector('[data-role="accept-button"]');
        acceptButton.innerHTML = settings.acceptButtonText;
        acceptButton.addEventListener('click', this.acceptCookie, false);
    };

    this.setAlertStyles = function() {
        for(var className in themes[settings.theme]) {
            var currentElements = el.getElementsByClassName(className);
            if(currentElements.length) {
                for(var i = 0; i < currentElements.length; i++) {
                    currentElements[i].style = themes[settings.theme][className];
                }
            }
        }
    };

    this.setAletrPosition = function() {
        var element = document.getElementById('simple-cookie-alert');
        if(settings.position == 'top') {
            element.style.top = 0;
            element.style.bottom = 'auto';
        } else {
            element.style.top = 'auto';
            element.style.bottom = 0;
        }
    };

    this.showAlert = function() {
        el.style.opacity = 0;
        setTimeout(function() {
            self.fadeIn(el);
        }, 1000);
    };

    this.acceptCookie = function() {
        self.createCookie('accept_cookie', 'true', 30);
        self.close();
    };

    this.close = function() {
        self.fadeOut(el);
    };

    this.fadeOut = function(el) {
        var tick = function() {
            el.style.opacity -= 0.1;

            if (el.style.opacity > 0) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            } 
            else {
                el.style.display = 'none';
            }
        };

        tick();
    };

    this.fadeIn = function(el) {
        var tick = function() {
            el.style.opacity = parseFloat(el.style.opacity) + 0.1;

            if (el.style.opacity < 1) {
                setTimeout(tick, 16);
            }
        }

        tick();
    };

    this.createCookie = function(name, value, days) {
        var expires;

        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            expires = "; expires="+date.toGMTString();
        }
        else {
            expires = "";
        }

        document.cookie = name+"="+value+expires+"; path=/";
    };

    this.readCookie = function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');

        for(var i=0;i < ca.length;i++) {
            var c = ca[i];

            while (c.charAt(0) === ' ') {
                c = c.substring(1,c.length);
            }

            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length,c.length);
            }
        }

        return null;
    };

    this.initialize = function(){
        if(self.readCookie('accept_cookie') == 'true') {
            return;
        }

        document.body.appendChild(el);
        el.innerHTML = template;

        self.overrideSettings();
        self.createProperReadMoreLink();
        self.acceptButtonHandler();
        self.setAlertStyles();
        self.setAletrPosition();
        self.showAlert();
    };

    this.initialize();
}