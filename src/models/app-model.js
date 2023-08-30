import Model from './model.js';
import PointModel from './point-model.js';
import { getRandomDestinations } from '../mock/destination.js';
import { getRandomOfferSets } from '../mock/offer.js';
import { getRandomPoints } from '../mock/point.js';

export default class AppModel extends Model {
  constructor () {
    super();

    /**
     * @type {Array<Point>}
     */
    this.points = [];

    /**
     * @type {Array<Destination>}
     */
    this.destinations = [];

    /**
     * @type {Array<OfferSet>}
     */
    this.offerSets = [];
  }

  /**
   * @returns {Promise<void>}
   */
  async ready () {
    // здесь будет метод для получения данных с сервера
    this.offerSets = getRandomOfferSets();
    this.destinations = getRandomDestinations();
    // @ts-ignore
    this.points = getRandomPoints(this.offerSets, this.destinations);
  }

  /**
   * @returns {Array<PointModel>}
   */
  getPoints () {
    return this.points.map((point) => new PointModel(point));
  }

  /**
   * @returns {Array<Destination>}
   */
  getDestinations () {
    return structuredClone(this.destinations);
  }

  /**
   * @returns {Array<OfferSet>}
   */
  getOfferSets () {
    return structuredClone(this.offerSets);
  }

}

