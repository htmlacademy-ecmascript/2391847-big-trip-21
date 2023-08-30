import { getRandomInt, getRandomSubArray, getRandomBoolean, getRandomDates, getRandomArrayElement } from './util-random.js';

const POINTS_COUNT = 10;

const priceRange = {
  MIN: 50,
  MAX: 1000,
};


/**
 * создает описание точки маршрута
 * @param {PointType} type
 * @param {string} destinationId
 * @param {Array<string>} offersIds
 * @returns {Point}
 */
function createRandomPoint (type, destinationId, offersIds) {

  return {
    id: crypto.randomUUID(),
    'base_price': getRandomInt(priceRange.MIN, priceRange.MAX),
    ...getRandomDates(),
    destination: destinationId,
    'is_favorite': getRandomBoolean(),
    offers: offersIds,
    type: type,
  };
}

/**
 * генерирует точку маршрута
 * @param {Array<OfferSet>} offers
 * @param {Array<Destination>} destinations
 * @returns {Point}
 */
function getRandomPoint (offers, destinations) {
  const randomOfferSet = getRandomArrayElement(offers);
  const destination = getRandomArrayElement(destinations);

  const offersIds = getRandomSubArray(randomOfferSet.offers).map((offer) => offer.id);

  return createRandomPoint(randomOfferSet.type, destination.id, offersIds);
}

/**
 * возвращет массив точек маршрута
 * @param {Array<OfferSet>} offers
 * @param {Array<Destination>} destinations
 * @returns {Array<Point>}
 */
function getRandomPoints (offers, destinations) {

  return Array.from({length: POINTS_COUNT}, () => getRandomPoint(offers, destinations));
}


export { getRandomPoints };
