'use strict';

window.util = (function () {
    var ESC_KEYCODE = 27;
    var ENTER_KEYCODE = 13;

    return {
      getRandomInteger: function (length) {
        return Math.floor(Math.random() * length);
      },
      isEscEvent: function (evt, action) {
        if (evt.keyCode === ESC_KEYCODE) {
          action();
        }
      },
      isEnterEvent: function (evt, action) {
        if (evt.keyCode === ENTER_KEYCODE) {
          action();
        }
      }
    }
  }
)();
