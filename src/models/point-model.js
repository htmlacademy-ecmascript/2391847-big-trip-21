import Model from './model.js';

export default class PointModel extends Model {
  /**
   * @param {Point} point
   */
  constructor (point) {
    super();

    this.id = point.id;
    this.basePrice = point.base_price;
    this.dateFrom = point.date_from;
    this.dateTo = point.date_to;
    this.destinationId = point.destination;
    this.isFavorite = point.is_favorite;
    this.offersIds = structuredClone(point.offers);
    this.type = point.type;
  }

  /**
   * метод для приведения точки маршрута к формату сервера
   * returns {Point} point
   */
  toJSON() {
    return {
      'id': this.id,
      'base_price': this.basePrice,
      'date_from': this.dateFrom,
      'date_to': this.dateTo,
      'is_favorite': this.isFavorite,
      'offers': structuredClone(this.offersIds),
      'destination': this.destinationId,
      'type': this.type,
    };
  }
}
