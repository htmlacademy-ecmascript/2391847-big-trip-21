import { createElement } from '../render.js';
import { createTripPointsListTemplate } from '../template/trip-points-list-template.js';


export default class TripPointsListView {
  getTemplate() {
    return createTripPointsListTemplate();
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
