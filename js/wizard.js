'use strict';

(function () {
  var WIZARDS_COUNT = 4;
  var Colors = {
    COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  var coatColor;
  var eyesColor;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardElement = similarWizardTemplate.cloneNode(true);
  var elementSelectorSetupSimilarLabel = wizardElement.querySelector('.setup-similar-label');
  var elementSelectorWizardCoat = wizardElement.querySelector('.wizard-coat');
  var elementSelectorWizardEyes = wizardElement.querySelector('.wizard-eyes');

  var setupWizard = document.querySelector('.setup-player');

  // смена цвета мантии
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  coatColor = wizardCoat.style.fill;
  wizardCoat.addEventListener('click', function () {
    coatColor = window.util.colorize(wizardCoat, 'fill', Colors.COAT);
    window.debounce(renderList);
  });

  // смена цвета глаз волшебника
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  eyesColor = wizardEyes.style.fill;
  wizardEyes.addEventListener('click', function () {
    eyesColor = window.util.colorize(wizardEyes, 'fill', Colors.EYES);
    window.debounce(renderList);
  });

  var wizardFireball = setupWizard.querySelector('.setup-fireball-wrap');
  wizardFireball.addEventListener('click', function () {
    window.util.colorize(wizardFireball, 'backgroundColor', Colors.FIREBALL);
  });

  var renderWizard = function (wizardCurrent) {
    elementSelectorSetupSimilarLabel.textContent = wizardCurrent.name;
    elementSelectorWizardCoat.style.fill = wizardCurrent.colorCoat;
    elementSelectorWizardEyes.style.fill = wizardCurrent.colorEyes;
    return wizardElement.cloneNode(true);
  };

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var updateWizards = function () {
    wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    });
  };

  var renderList = function () {
    updateWizards();

    var similarListElement = document.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARDS_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.querySelectorAll('.setup-similar-item').forEach(function (value) {
      value.remove();
    });
    similarListElement.appendChild(fragment);
  };

  var addWizardList = function (list) {
    wizards = list;
    renderList();
  };
  var wizards = [];


  window.wizard = {
    addWizardList: addWizardList
  };
})();
