'use strict';

var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_COUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var similarListElement = document.querySelector('.setup-similar-list');

var renderWizard = function (wizard) {
  elementSelectorSetupSimilarLabel.textContent = wizard.name;
  elementSelectorWizardCoat.style.fill = wizard.coatColor;
  elementSelectorWizardEyes.style.fill = wizard.eyesColor;
  return wizardElement.cloneNode(true);
};

var wizardElement = similarWizardTemplate.cloneNode(true);
var elementSelectorSetupSimilarLabel = wizardElement.querySelector('.setup-similar-label');
var elementSelectorWizardCoat = wizardElement.querySelector('.wizard-coat');
var elementSelectorWizardEyes = wizardElement.querySelector('.wizard-eyes');

var userDialog = document.querySelector('.setup');
var wizards = window.wizards.getWizards(WIZARDS_COUNT);
var fragment = document.createDocumentFragment();

wizards.forEach(function (wizard) {
  fragment.appendChild(renderWizard(wizard));
});
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var drawElementRandomColorFromArray = function (element, property, arr) {
  var value = arr[window.util.getRandomInteger(arr.length - 1)];
  if (property === 'fill') {
    element.style.fill = value;
  } else if (property === 'backgroundColor') {
    element.style.backgroundColor = value;
  }
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

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
