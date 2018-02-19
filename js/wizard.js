'use strict';

(function () {
  var WIZARDS_COUNT = 4;
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardElement = similarWizardTemplate.cloneNode(true);
  var elementSelectorSetupSimilarLabel = wizardElement.querySelector('.setup-similar-label');
  var elementSelectorWizardCoat = wizardElement.querySelector('.wizard-coat');
  var elementSelectorWizardEyes = wizardElement.querySelector('.wizard-eyes');

  var setupWizard = document.querySelector('.setup-player');

  // смена цвета мантии
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  wizardCoat.addEventListener('click', function () {
    window.util.colorize(wizardCoat, 'fill', COAT_COLORS);
  });

  // смена цвета глаз волшебника
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  wizardEyes.addEventListener('click', function () {
    window.util.colorize(wizardEyes, 'fill', EYES_COLORS);
  });

  var wizardFireball = setupWizard.querySelector('.setup-fireball-wrap');
  wizardFireball.addEventListener('click', function () {
    window.util.colorize(wizardFireball, 'backgroundColor', FIREBALL_COLORS);
  });

  var renderWizard = function (wizardCurrent) {
    elementSelectorSetupSimilarLabel.textContent = wizardCurrent.name;
    elementSelectorWizardCoat.style.fill = wizardCurrent.colorCoat;
    elementSelectorWizardEyes.style.fill = wizardCurrent.colorEyes;
    return wizardElement.cloneNode(true);
  };

  var renderList = function (list) {
    var arrIndex = window.util.getRandomIntegerArray(WIZARDS_COUNT, list.length - 1);

    var similarListElement = document.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();
    arrIndex.forEach(function (value) {
      fragment.appendChild(renderWizard(list[value]));
    });
    similarListElement.querySelectorAll('.setup-similar-item').forEach(function (value) {
      value.remove();
    });
    similarListElement.appendChild(fragment);
  };

  window.wizard = {
    renderList: renderList
  };
})();
