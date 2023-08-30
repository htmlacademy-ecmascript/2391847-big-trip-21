import { createElement } from '../render.js';

const TRIP_POINT_LIST_TEMPLATE = //html
`
<ul class="trip-events__list"></ul>`;

export default class TripPointsListView {
  getTemplate() {
    return TRIP_POINT_LIST_TEMPLATE;
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
