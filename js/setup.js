'use strict';

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var removeClass = function (selector, className) {
  var node = document.querySelector(selector);

  node.classList.remove(className);
};

removeClass('.setup', 'hidden');

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomName = function () {
  var name = NAMES[getRandomNumber(0, 7)] + ' ' + SURNAMES[getRandomNumber(0, 7)];

  return name;
};

var getRandomWizard = function () {
  var randomWizard = {
    name: getRandomName(),
    coatColor: COAT_COLORS[getRandomNumber(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandomNumber(0, EYES_COLORS.length - 1)]
  };

  return randomWizard;
};

var getWizards = function () {
  var arrWizards = [];

  for (var i = 0; i < 4; i++) {
    arrWizards.push(getRandomWizard());
  }

  return arrWizards;
};

var getWizardsToDom = function () {
  var arrWizards = getWizards();
  var template = document.getElementById('similar-wizard-template');
  var setupSimilarItem = template.content.querySelector('.setup-similar-item');

  for (var i = 0; i < 4; i++) {
    var setupItem = setupSimilarItem.cloneNode(true);
    var setupSimilarList = document.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();

    setupItem.querySelector('.setup-similar-label').textContent = arrWizards[i].name;
    setupItem.querySelector('.wizard-coat').style.fill = arrWizards[i].coatColor;
    setupItem.querySelector('.wizard-eyes').style.fill = arrWizards[i].eyesColor;

    fragment.appendChild(setupItem);
    setupSimilarList.appendChild(fragment);
  }
};

removeClass('.setup-similar', 'hidden');
getWizardsToDom();
