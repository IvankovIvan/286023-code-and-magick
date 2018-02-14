'use strict';

(function () {

  var wizards = [];
  for (var i = 0; i < window.const.WIZARDS_COUNT; i++) {
    wizards[i] = window.wizard.getNew();
  }

  var similarListElement = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  wizards.forEach(function (wizard) {
    fragment.appendChild(window.wizard.render(wizard));
  });
  similarListElement.appendChild(fragment);
})();







