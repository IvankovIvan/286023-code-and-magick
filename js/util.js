'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var getRandomNumber = function (length) {
    return Math.floor(Math.random() * length);
  };

  var getMaximumValue = function (values) {
    var maxValue = 0;
    values.forEach(function (value) {
      if (maxValue < value) {
        maxValue = value;
      }
    });
    return maxValue;
  };

  window.util = {
    getRandomInteger: getRandomNumber,
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    getMaximumValue: getMaximumValue,
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    colorize: function (element, property, arr) {
      var value = arr[getRandomNumber(arr.length - 1)];
      if (element.tagName.toLocaleLowerCase() === 'div') {
        element.style.backgroundColor = value;
      } else {
        element.style.fill = value;
      }
    }
  };
})();

