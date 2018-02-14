'use strict';

(function () {
  var FONT = '16px PT Mono';
  var COLOR_TEXT = '#000';
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_COLOR = '#fff';
  var CLOUD_SHADOW_X = 110;
  var CLOUD_SHADOW_Y = 20;
  var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
  var TITLE_X = 120;
  var TITLE_Y_FIRST = 40;
  var TITLE_Y_SECOND = 60;
  var YOU_TITLE_COLOR = 'rgba(255, 0, 0, 1)';
  var OTHER_TITLE_COLOR = '0, 0, 255';
  var BAR_X = 140;
  var BAR_Y = 100;
  var BAR_VALUE_Y = 90;
  var BAR_TEXT_Y = 260;
  var BAR_WIDTH = 40;
  var GAP = 50;
  var BAR_HEIGHT = 140;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getRandomOpacity = function (color) {
    return 'rgba(' + color + ', ' + Math.random() + ')';
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_SHADOW_X, CLOUD_SHADOW_Y, CLOUD_SHADOW_COLOR);
    renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
    ctx.font = FONT;
    ctx.fillStyle = COLOR_TEXT;
    ctx.fillText('Ура вы победили!', TITLE_X, TITLE_Y_FIRST);
    ctx.fillText('Список результатов:', TITLE_X, TITLE_Y_SECOND);

    for (var i = 0; i < names.length; i++) {
      if (names[i] === 'Вы') {
        ctx.fillStyle = YOU_TITLE_COLOR;
      } else {
        ctx.fillStyle = getRandomOpacity(OTHER_TITLE_COLOR);
      }

      var valueHeightBar = Math.round(times[i] / window.util.getMaximumValue(times) * BAR_HEIGHT);
      ctx.fillRect(BAR_X + i * (GAP + BAR_WIDTH), BAR_Y + BAR_HEIGHT - valueHeightBar, BAR_WIDTH, valueHeightBar);

      ctx.fillStyle = COLOR_TEXT;
      ctx.fillText(Math.round(times[i]), BAR_X + i * (GAP + BAR_WIDTH), BAR_VALUE_Y + BAR_HEIGHT - valueHeightBar);
      ctx.fillText(names[i], BAR_X + i * (GAP + BAR_WIDTH), BAR_TEXT_Y);
    }
  };
})();
