'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;
var YOUR_BAR_COLOR = 'rgba(255, 0, 0, 1)';
var FONT_GAP = 15;
var FONT_HEIGHT = 10;
var NAME_Y = 260;
var TEXT_PADDING_X = 20;
var PADDING_TOP = 30;
var PADDING_TIME_TEXT = 80;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getColor = function (red, green, blue, opacity) {
  return 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity + ')';
};

var writeText = function (ctx, text, coordinateX, coordinateY, color) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = color || '#000';
  ctx.fillText(text, coordinateX, coordinateY);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  writeText(ctx, 'Ура вы победили!', CLOUD_X + TEXT_PADDING_X, CLOUD_Y + PADDING_TOP);
  writeText(ctx, 'Список результатов:', CLOUD_X + TEXT_PADDING_X, CLOUD_Y + PADDING_TOP + FONT_HEIGHT + CLOUD_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = (names[i] === 'Вы') ? YOUR_BAR_COLOR : getColor(0, 0, 255, getRandomNumber(0.2, 1));

    ctx.fillRect(
        CLOUD_X + TEXT_PADDING_X + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i,
        NAME_Y - CLOUD_GAP - FONT_HEIGHT,
        BAR_WIDTH,
        -(BAR_HEIGHT * times[i]) / maxTime
    );

    writeText(
        ctx,
        Math.round(times[i]),
        CLOUD_X + TEXT_PADDING_X + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i,
        PADDING_TIME_TEXT
    );
    writeText(
        ctx,
        names[i],
        CLOUD_X + TEXT_PADDING_X + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i,
        NAME_Y
    );
  }
};
