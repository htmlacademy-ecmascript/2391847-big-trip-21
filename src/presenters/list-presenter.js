import Presenter from './presenter.js';

/**
 * @typedef {import('../views/list-view').default} View
 * @typedef {import('../models/app-model').default} Model
 *
 * @extends {Presenter<View, Model>}
 */
export default class ListPresenter extends Presenter {
  /**
   * @param {[View, Model]} rest
   */
  constructor(...rest) {
    super(...rest);

    // this.view.addEventListener('change', this.onViewChange.bind(this));
  }

  /**
   * @override
   */
  updateView() {
    const points = this.model.getPoints();
    const destinations = this.model.getDestinations();
    const offerSets = this.model.getOfferSets();

    const items = points.map((point, index) => {
      const {offers} = offerSets.find((offerSet) => offerSet.type === point.type);

      return {
        id: point.id,

        types: offerSets.map((offerSet) => ({
          value: offerSet.type,
          isSelected: point.type === offerSet.type,
        })),

        destinations: destinations.map((destination) => ({
          ...destination,
          isSelected: destination.id === point.destinationId,
        })),

        dateFrom: point.dateFrom,
        dateTo: point.dateTo,
        basePrice: point.basePrice,

        offers: offers.map((offer) => ({
          ...offer,
          isSelected: point.offersIds?.includes(offer.id),
        })),

        isFavorite: point.isFavorite,
        isEditable: index === 1,
      };
    });

    this.view.setState({items});
    // при инициализации экземпляра презентера в конструкторе вызывается метод this.updateView() для вьюшки list
    // updateView() у вьюшки list формирует данные State и вызывает родительский setState() с полученным массивом точек
    // setstate вызывает метод render вьюшки list для отрисовки точек
    // render во вьюшке list создает для каждой точки свою вьюшку просмотра или редактированя
    // и вызывает setState для созданной вьюшки
    // setstate вызывает метод render вьюшки просмотра или редактирования и отрисовывает элемент
  }
}

