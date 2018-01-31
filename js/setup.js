'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;

var simularWizardTemplate = document.querySelector('#similar-wizard-template').content;
var simularListElement = document.querySelector('.setup-similar-list');

var getRandomInteger = function (length) {
  return Math.floor(Math.random() * length);
};

var getNameNew = function () {
  return WIZARD_NAMES[getRandomInteger(WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAME[getRandomInteger(WIZARD_SURNAME.length)];
};

var getWizardNew = function () {
  return {
    name: getNameNew(),
    coatColor: COAT_COLOR[getRandomInteger(COAT_COLOR.length)],
    eyesColor: EYES_COLOR[getRandomInteger(EYES_COLOR.length)]
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
  var wizardElement = simularWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var wizards = getWizards(WIZARDS_COUNT);
var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
simularListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
