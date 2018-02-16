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

        var rect = mainWindow.getBoundingClientRect();
        var width = rect.right - rect.left;
        var height = rect.bottom - rect.top;
        var widthWindow = window.innerWidth;
        var heightWindow = window.innerHeight;

        var onMouseMove = function (moveEvt) {
          moveEvt.preventDefault();

          var shift = {
            x: startCoords.x - moveEvt.clientX,
            y: startCoords.y - moveEvt.clientY
          };


          var x = mainWindow.offsetLeft - shift.x;
          if (x < 0) {
            x = 0;
          } else if (width + moveEvt.clientX >= widthWindow) {
            x = mainWindow.offsetLeft;
          }

          var y = (mainWindow.offsetTop - shift.y);
          if (y < 0) {
            y = 0;
          } else if (height + moveEvt.clientY >= heightWindow) {
            y = mainWindow.offsetTop;
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
