import { createElement } from '../render.js';
import { createTripPointTemplate } from '../template/trip-point-template.js';


export default class TripPointView {
  getTemplate() {
    return createTripPointTemplate();
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
