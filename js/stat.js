'use strict';
var FONT = '16px PT Mono';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 140;
var BAR_Y = 100;
var BAR_VALUE_Y = 90;
var BAR_TEXT_Y = 260;
var BAR_WIDTH = 40;
var GAP = 50;
// почему то высота подходить 140 хотя в задании 150 пикселей
var BAR_HEIGHT = 140;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaximumValue = function (values) {
  var maxValue = values[0];
  for (var i = 1; i < values.length; i++) {
    if (maxValue < values[i]) {
      maxValue = values[i];
    }
  }
  return maxValue;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');
  ctx.font = FONT;
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }

    var valueHeightBar = Math.round(times[i] / getMaximumValue(times) * BAR_HEIGHT);
    ctx.fillRect(CLOUD_X + i * (GAP + BAR_WIDTH), BAR_Y + BAR_HEIGHT - valueHeightBar,
        BAR_WIDTH, valueHeightBar);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + i * (GAP + BAR_WIDTH),
        BAR_VALUE_Y + BAR_HEIGHT - valueHeightBar);
    ctx.fillText(names[i], CLOUD_X + i * (GAP + BAR_WIDTH), BAR_TEXT_Y);
  }


};
