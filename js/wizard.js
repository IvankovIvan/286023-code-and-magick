'use strict';

window.wizard = (function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getName = function () {
    return WIZARD_NAMES[window.util.getRandomInteger(WIZARD_NAMES.length)] + ' '
      + WIZARD_SURNAMES[window.util.getRandomInteger(WIZARD_SURNAMES.length)];
  };

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

  return {
    getNew: function () {
      return {
        name: getName(),
        coatColor: COAT_COLORS[window.util.getRandomInteger(COAT_COLORS.length)],
        eyesColor: EYES_COLORS[window.util.getRandomInteger(EYES_COLORS.length)]
      };
    },
    render: function (wizardCurrent) {
      elementSelectorSetupSimilarLabel.textContent = wizardCurrent.name;
      elementSelectorWizardCoat.style.fill = wizardCurrent.coatColor;
      elementSelectorWizardEyes.style.fill = wizardCurrent.eyesColor;
      return wizardElement.cloneNode(true);
    }
  };
})();
