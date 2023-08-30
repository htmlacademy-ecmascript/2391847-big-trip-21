import { getRandomArrayElement, getRandomInt } from './util-random.js';
import { POINT_TYPES } from '../const.js';

const MOCK_OFFERS = [
  'Upgrade to a business class',
  'Choose the radio station',
  'Choose temperature',
  'Drive quickly, I\'m in a hurry',
  'Drive slowly',
  'Infotainment system',
  'Order meal',
  'Choose seats',
  'Book a taxi at the arrival point',
  'Order a breakfast',
  'Wake up at a certain time',
  'Choose meal',
  'Upgrade to comfort class',
  'Add luggage',
  'Business lounge',
  'Choose the time of check-in',
  'Choose the time of check-out',
  'Add breakfast',
  'Laundry',
  'Order a meal from the restaurant',
  'With automatic transmission',
  'With air conditioning',
  'Choose live music',
  'Choose VIP area',
];

const priceRange = {
  MIN: 10,
  MAX: 500,
};

const offersQuantity = {
  MIN: 0,
  MAX: 5,
};

/**
 * генерирует доп предложение
 * @returns {Offer}
 */
function createOfferItem () {

  return {
    id: crypto.randomUUID(),
    title: getRandomArrayElement(MOCK_OFFERS),
    price: getRandomInt(priceRange.MIN, priceRange.MAX),
  };
}

/**
 * генерирует массив из доп предложений для точки маршрута
 * @param {PointType} type
 * @returns {OfferSet}
 */
function getRandomOffer (type) {

  return {
    type,
    offers: Array.from({length: getRandomInt(offersQuantity.MIN, offersQuantity.MAX)}, createOfferItem) ,
  };
}

/**
 * генерирует массив из доп предложений для точки маршрута
 * @returns {Array<OfferSet>}
 */
function getRandomOfferSets () {

  return POINT_TYPES.map(getRandomOffer);
}

export { getRandomOfferSets };

