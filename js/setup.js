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

var setup = document.querySelector('.setup');
var setupSimilar = setup.querySelector('.setup-similar');

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomName = function () {
  var name = NAMES[getRandomNumber(0, 7)] + ' ' + SURNAMES[getRandomNumber(0, 7)];

  return name;
};

var generateWizard = function () {
  var randomWizard = {
    name: getRandomName(),
    coatColor: COAT_COLORS[getRandomNumber(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandomNumber(0, EYES_COLORS.length - 1)]
  };

  return randomWizard;
};

var getWizards = function () {
  var arrWizards = [];
  var quantitySimilarWizards = 4;

  for (var i = 0; i < quantitySimilarWizards; i++) {
    arrWizards.push(generateWizard());
  }

  return arrWizards;
};

var renderWizards = function () {
  var quantitySimilarWizards = 4;
  var arrWizards = getWizards();
  var template = document.getElementById('similar-wizard-template');
  var setupSimilarItem = template.content.querySelector('.setup-similar-item');

  for (var i = 0; i < quantitySimilarWizards; i++) {
    var setupItem = setupSimilarItem.cloneNode(true);
    var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();

    setupItem.querySelector('.setup-similar-label').textContent = arrWizards[i].name;
    setupItem.querySelector('.wizard-coat').style.fill = arrWizards[i].coatColor;
    setupItem.querySelector('.wizard-eyes').style.fill = arrWizards[i].eyesColor;

    fragment.appendChild(setupItem);
    setupSimilarList.appendChild(fragment);
  }
};

var showSetup = function () {
  setup.classList.remove('hidden');
  setupSimilar.classList.remove('hidden');
};

showSetup();
renderWizards();
