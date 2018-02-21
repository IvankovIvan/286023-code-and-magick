'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupMainCoordsSetup = {
    x: setup.style.left,
    y: setup.style.top
  };

  setup.querySelector('.setup-similar').classList.remove('hidden');

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var showSetup = function (arrayWizard) {
    setup.style.left = setupMainCoordsSetup.x;
    setup.style.top = setupMainCoordsSetup.y;
    window.wizard.addWizardList(arrayWizard);
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    var setupUserPic = setup.querySelector('.setup-user-pic');
    window.dragdrop.create(setupUserPic, setup);
  };
  var openPopup = function () {
    window.backend.load(showSetup, window.util.errorHandler);
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

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(function () {
      closePopup();
    }, window.util.errorHandler, new FormData(form));
    evt.preventDefault();
  });

  // Путь останеться я потом сделаю
  // var setupArtifactsShop = setup.querySelector('.setup-artifacts-shop');
  // setupArtifactsShop.style.border = 'thin solid red';
  // console.log(setupArtifactsShop);
  // setupArtifactsShop.addEventListener('mousedown', function (evt) {
  //   evt.preventDefault();
  //   if (!evt.target.draggable) {
  //     return;
  //   }
  //
  //
  //
  //   console.log(evt.target, evt.currentTarget);
  //
  // });
})();


