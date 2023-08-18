// возвращает рандомный элемент массива
function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// возвращает случайное число из диапозона
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// возвращает текст из случайного числа строк
function getRandomText(items, min, max) {
  return Array.from({length: getRandomInt(min, max)}, () => getRandomArrayElement(items)).join(' ');
}

// возвращает случайное булево значение
function getRandomBoolean() {
  return Math.random() >= 0.5;
}

export { getRandomArrayElement, getRandomText, getRandomInt, getRandomBoolean };

