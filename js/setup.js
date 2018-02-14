'use strict';

var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setup = document.querySelector('.setup');
setup.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  window.util.isEscEvent(evt, closePopup);
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  window.util.isEnterEvent(evt, openPopup);
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  window.util.isEnterEvent(evt, closePopup);
});

var drawElementRandomColorFromArray = function (element, property, arr) {
  var value = arr[window.util.getRandomInteger(arr.length - 1)];
  if (property === 'fill') {
    element.style.fill = value;
  } else if (property === 'backgroundColor') {
    element.style.backgroundColor = value;
  }
};

var setupWizard = document.querySelector('.setup-player');

// смена цвета мантии
var wizardCoat = setupWizard.querySelector('.wizard-coat');
wizardCoat.addEventListener('click', function () {
  drawElementRandomColorFromArray(wizardCoat, 'fill', COAT_COLORS);
});

// смена цвета глаз волшебника
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
wizardEyes.addEventListener('click', function () {
  drawElementRandomColorFromArray(wizardEyes, 'fill', EYES_COLORS);
});

var wizardFireball = setupWizard.querySelector('.setup-fireball-wrap');
wizardFireball.addEventListener('click', function () {
  drawElementRandomColorFromArray(wizardFireball, 'backgroundColor', FIREBALL_COLORS);
});
