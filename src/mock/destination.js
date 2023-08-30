import { getRandomText, getRandomInt } from './util-random.js';
import { CITIES } from '../const.js';

const MOCK_DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
];

const sentencesQuantity = {
  MIN: 1,
  MAX: 5,
};

const picturesQuantity = {
  MIN: 0,
  MAX: 6,
};

/**
 * генерирует объект для описания картинки
 * @param {string} city
 * @returns {Picture}
 */
function getRandomPicture (city) {

  return {
    src: `https://loremflickr.com/248/152/${city}?random=${getRandomInt()}`,
    description: `${city} description`,
  };
}


/**
 * генерирует описание места назначения
 * @param {string} name
 * @returns {Destination}
 */
function getRandomDestination (name) {

  return {
    id: crypto.randomUUID(),
    name,
    description: getRandomText(MOCK_DESCRIPTIONS, sentencesQuantity.MIN, sentencesQuantity.MAX),
    pictures: Array.from({length: getRandomInt(picturesQuantity.MIN, picturesQuantity.MAX)}, () => getRandomPicture(name)),
  };
}

/**
 * генерирует описание для всех городов
 * @returns {Array<Destination>}
 */
function getRandomDestinations () {

  return CITIES.map(getRandomDestination);
}


export { getRandomDestinations };

