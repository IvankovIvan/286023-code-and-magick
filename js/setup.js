'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;

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

var getElementSelector = function (element, selector) {
  return element.querySelector(selector);
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  getElementSelector(wizardElement, '.setup-similar-label').textContent = wizard.name;
  getElementSelector(wizardElement, '.wizard-coat').style.fill = wizard.coatColor;
  getElementSelector(wizardElement, '.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var wizards = getWizards(WIZARDS_COUNT);
var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
