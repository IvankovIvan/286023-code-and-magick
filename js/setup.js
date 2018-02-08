'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_COUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var similarListElement = document.querySelector('.setup-similar-list');

var getRandomInteger = function (length) {
  return Math.floor(Math.random() * length);
};

var getNameNew = function () {
  return WIZARD_NAMES[getRandomInteger(WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInteger(WIZARD_SURNAMES.length)];
};

var getWizardNew = function () {
  return {
    name: getNameNew(),
    coatColor: COAT_COLORS[getRandomInteger(COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandomInteger(EYES_COLORS.length)]
  };
};

var getWizards = function (number) {
  var wizards = [];
  for (var i = 0; i < number; i++) {
    wizards[i] = getWizardNew();
  }
  return wizards;
};

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
var wizards = getWizards(WIZARDS_COUNT);
var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
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
  var value = arr[getRandomInteger(arr.length - 1)];
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
