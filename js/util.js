'use strict';

(function () {
  var Code = {
    ESC: 27,
    ENTER: 13
  };

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

  var getRandomIntegerArray = function (length, maxValue) {
    var rand;
    var arrIndex = [];
    while (arrIndex.length < length) {
      do {
        rand = getRandomNumber(maxValue);
      } while (arrIndex.indexOf(rand) !== -1);
      arrIndex.push(rand);
    }
    return arrIndex;
  };

  var createErrorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.util = {
    getRandomInteger: getRandomNumber,
    isEscEvent: function (evt, action) {
      if (evt.keyCode === Code.ESC) {
        action();
      }
    },
    getMaximumValue: getMaximumValue,
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === Code.ENTER) {
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
      return value;
    },
    getRandomIntegerArray: getRandomIntegerArray,
    errorHandler: createErrorHandler
  };
})();

