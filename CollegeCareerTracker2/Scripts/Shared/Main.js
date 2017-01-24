$(document).ready(function () {

    if (typeof document_ready !== 'undefined') {
        document_ready();
    }
});



function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value;
    if (true || appserverurl.indexOf('127.0.0.') > 0)
        c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    else
        c_value = escape(value) + ((exdays == null) ? "" : "; domain=.Datoki.com; path=/; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + "; path=/";
}

function checkEmail(email) {
    if (email) {
        var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    }
    return false;
}
function checkPassword(pass) {
    var regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/);
    return regex.test(pass);
}
function checkDateFormat(date) {
    var matches = date.match(/(\d{2})[- \/](\d{2})[- \/](\d{4})/);
    if (matches) {
        var month = parseInt(matches[1], 10);
        var day = parseInt(matches[2], 10);
        var year = parseInt(matches[3], 10);
        var date = new Date(year, month - 1, day);
        if (date && date.getMonth() + 1 == month && date.getFullYear() == year && date.getDate() == day) {
            return true;
        }
    }
    return false;
}

