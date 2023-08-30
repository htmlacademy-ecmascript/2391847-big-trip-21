
// failed-load-data.html - "Failed to load latest route information"
// list-empty.html - "Click New Event to create your first point"
// loading.html - "Loading..."

import View from './view.js';
import {html} from '../utils.js';

export default class MessageView extends View {
  /**
   * @override
   */
  createHtml() {
    return html`
    <p class="trip-events__msg">Failed to load latest route information</p>
    `;
  }
}

customElements.define('message-view', MessageView);


