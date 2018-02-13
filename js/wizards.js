'use strict';

(function () {





  // var fragment = document.createDocumentFragment();
  //
  // wizards.forEach(function (wizard) {
  //   fragment.appendChild(window.wizard.render(wizard));
  // });
  //
  // var similarListElement = document.querySelector('.setup-similar-list');
  // similarListElement.appendChild(fragment);

  window.wizards = {

    getWizards: function(x) {
      var wizards = [];
      for (var i = 0; i < window.const.WIZARDS_COUNT; i++) {
        wizards[i] = window.wizard.getWizardNew();
      }
      return wizards;
    },


    render: function () {

    }
  };
})();







