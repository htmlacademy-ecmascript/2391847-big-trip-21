import View from './view.js';
import {html} from '../utils.js';

export default class AddButtonView extends View {
  /**
   * @override
   */
  createHtml() {
    return html`
      <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
    `;
  }
}

customElements.define('add-button-view', AddButtonView);

