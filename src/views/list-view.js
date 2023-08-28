import './list-view.css';
import View from './view.js';
import PointView from './point-view.js';
import EditView from './edit-view.js';


/**
 * @template Option
 * @typedef {Option & {
 *  isSelected: boolean
 * }} Selectable
 */

/**
 * @typedef {{
 *  value: PointType
 * }} Type
 *
 * @typedef {{
 *  id: string
 *  types: Array<Selectable<Type>>
 *  destinations: Array<Selectable<Destination>>
 *  dateFrom: string
 *  dateTo: string
 *  basePrice: number
 *  offers: Array<Selectable<Offer>>
 *  isFavorite: boolean
 *  isEditable: boolean
 * }} ItemState
 *
 * @typedef {{
 *  items: Array<ItemState>
 * }} State
 *
 * @extends {View<State>}
 */

export default class ListView extends View {
  constructor() {
    super();

    this.classList.add('trip-list');
    this.setAttribute('role', 'list');
  }

  /**
   * @override
   */
  render() {
    const views = this.state.items.map((item) => {
      const view = item.isEditable ? new EditView() : new PointView();

      view.classList.add('trip-list__item');
      view.setAttribute('role', 'listitem');
      view.setState(item);// метод setState вызывает метод render выбранной вьюшки (точки или окно редактирования)

      return view;
    });

    this.replaceChildren(...views);
  }
}

customElements.define('list-view', ListView);

