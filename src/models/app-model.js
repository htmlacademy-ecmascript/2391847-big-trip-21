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
    return this.points.map(this.cteatePoint);
  }

  /**
   * @param {Point} data
   * @returns {PointModel}
   */
  cteatePoint (data = Object.create(null)) {
    return new PointModel(data);
  }

  /**
   * @param {PointModel} pointModel
   * @returns {Promise<void>}
   */
  async updatePoint (pointModel) {
    // TODO: нужно обновить данные на сервере
    const data = pointModel.toJSON();
    const index = this.points.findIndex((point) => point.id === data.id);

    this.points.splice(index, 1, data);

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

