import { createElement } from '../render.js';
import { createTripPointEditTemplate } from '../template/trip-point-edit-template.js';


export default class TripPointEditView {
  getTemplate() {
    return createTripPointEditTemplate();
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
