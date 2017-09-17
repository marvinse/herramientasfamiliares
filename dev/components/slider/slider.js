'use strict';

var APP = window.APP = window.APP || {};

APP.slider = (function () {
    
    var init = function (element) {
        console.log('APP.slider');
        $('.sliders').slick({
        	slidesToShow: 1,
        	dots: true
        });
    };

    return {
        init: init
    };

}());