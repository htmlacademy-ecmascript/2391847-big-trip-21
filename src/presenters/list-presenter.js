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

    this.view.addEventListener('open', this.onViewOpen.bind(this));
    this.view.addEventListener('close', this.onViewClose.bind(this));
    this.view.addEventListener('favorite', this.onViewFavorite.bind(this));
  }

  /**
   * @override
   */
  updateView() {
    const params = this.navigation.getParams();

    const points = this.model.getPoints();
    const destinations = this.model.getDestinations();
    const offerSets = this.model.getOfferSets();

    const items = points.map((point) => {
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
        // если id в адресной строке совпадает с id точки, то отрисует форму редактирования
        isEditable: params.edit === point.id,
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

  /**
   * @param {import ('../views/list-view').ItemState} state
   * @returns {import ('../models/point-model').default}
   */
  createPoint(state) {
    const point = this.model.cteatePoint();

    Object.assign(point, {
      id: state.id,
      type: state.types.find((type) => type.isSelected).value,
      destinationId: state.destinations.find((destination) => destination.isSelected)?.id,
      dateFrom: state.dateFrom,
      dateTo: state.dateTo,
      basePrice: state.basePrice,
      offersIds: state.offers.filter((offer) => offer.isSelected).map((offer) => offer.id),
      isFavorite: state.isFavorite,
    });

    return point;
  }

  /**
   * добавляет id точки маршрута в адресную строку при событии open (клике на стрелочку)
   * @param {CustomEvent & {
   *  target: import ('../views/point-view').default
   * }} event
   */
  onViewOpen(event) {
    const params = this.navigation.getParams();

    params.edit = event.target.state.id;

    this.navigation.setParams(params);
  }

  /**
   * удаляет id точки маршрута из адресной строки при событии close (клике на стрелочку)
   */
  onViewClose() {
    const params = this.navigation.getParams();

    delete params.edit;

    this.navigation.setParams(params);
  }

  /**
   *  при событии favorite (клике на звездочку)
   * @param {CustomEvent & {
   *  target: import ('../views/point-view').default
   * }} event
   */
  async onViewFavorite(event) {
    const card = event.target;

    card.state.isFavorite = !card.state.isFavorite;
    await this.model.updatePoint(this.createPoint(card.state));

    card.render();
  }
}

