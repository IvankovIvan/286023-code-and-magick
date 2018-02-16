'use strict';

(function () {
  window.dragdrop = {
    create: function (element, mainWindow) {
      element.addEventListener('mousedown', function (evt) {
        evt.preventDefault();

        var startCoords = {
          x: evt.clientX,
          y: evt.clientY
        };

        var onMouseMove = function (moveEvt) {
          moveEvt.preventDefault();

          var shift = {
            x: startCoords.x - moveEvt.clientX,
            y: startCoords.y - moveEvt.clientY
          };

          var rect = mainWindow.getBoundingClientRect();
          var x = mainWindow.offsetLeft - shift.x;
          if (mainWindow.offsetLeft - shift.x < 0) {
            x = 0;
          } else if (rect.right >= window.innerWidth) {
            x = mainWindow.offsetLeft - 1;

          }

          var y = (mainWindow.offsetTop - shift.y);
          if (mainWindow.offsetTop - shift.y < 0) {
            y = 0;
          } else if (rect.bottom >= window.innerHeight) {
            y = mainWindow.offsetTop - 1;

          }

          startCoords = {
            x: moveEvt.clientX,
            y: moveEvt.clientY
          };

          mainWindow.style.top = y + 'px';
          mainWindow.style.left = x + 'px';
        };

        var onMouseUp = function (upEvt) {
          upEvt.preventDefault();
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      });
    }
  };
})();
