import { createElement } from '../render.js';


// failed-load-data.html - "Failed to load latest route information"
// list-empty.html - "Click New Event to create your first point"
// loading.html - "Loading..."

function createMessageTemplate() {
  return ( //html
    `
    <p class="trip-events__msg">Failed to load latest route information</p>
    `
  );
}
export default class MessageView {
  getTemplate() {
    return createMessageTemplate();
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
