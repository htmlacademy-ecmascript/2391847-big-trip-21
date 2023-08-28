import dayjs from 'dayjs';


const DefaultNumber = {
  MIN: 1,
  MAX: 1000,
};

const duration = {
  DAY: 1,
  HOUR: 5,
  MINUTE: 59,
};

/**
 * возвращает рандомный элемент массива
 * @param {Array<*>} items
 * @returns {*}
 */
function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

/**
 * возвращает случайное число из диапозона
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomInt(min = DefaultNumber.MIN, max = DefaultNumber.MAX) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * возвращает массив из случайных элементов массива
 * @param {Array<*>} array
 * @returns {Array<*>}
 */
function getRandomSubArray(array) {
  const selectedArray = [];

  array.forEach((element) => {
    if (getRandomBoolean()) {
      selectedArray.push(element);
    }
  });

  return selectedArray;
}


/**
 * возвращает текст из случайного числа строк
 * @param {Array<string>} items
 * @param {number} min
 * @param {number} max
 * @returns {string}
 */
function getRandomText(items, min, max) {
  return Array.from({length: getRandomInt(min, max)}, () => getRandomArrayElement(items)).join(' ');
}

/**
 * возвращает случайное булево значение
 * @returns {boolean}
 */
function getRandomBoolean() {
  return Math.random() >= 0.5;
}


let date = dayjs()
  .subtract(getRandomInt(0, duration.DAY), 'day')
  .subtract(getRandomInt(0, duration.HOUR), 'hour')
  .subtract(getRandomInt(0, duration.MINUTE), 'minute')
  .toDate();

/**
 * возвращает случайную дату
 * @param {{next: boolean}} next
 * @returns {Date}
 */
function getDate ({next}) {

  if (next) {
    date = dayjs(date)
      .add(getRandomInt(0, duration.DAY), 'day')
      .add(getRandomInt(0, duration.HOUR), 'hour')
      .add(getRandomInt(0, duration.MINUTE), 'minute')
      .toDate();
  }
  return date;
}

/**
 * возвращает случайные даты
 * @returns {{date_from: string, date_to: string}}
 */
function getRandomDates () {

  return {
    'date_from': getDate({next: false}).toISOString(),
    'date_to': getDate({next: true}).toISOString(),
  };
}

export { getRandomArrayElement, getRandomSubArray, getRandomText, getRandomInt, getRandomBoolean, getRandomDates };

