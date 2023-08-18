import { createElement } from '../render.js';
import { capitalizeString, formatDateForPointsView, formatTime, calculateDuration } from '../util.js';


// создает темплейт разметки из массива офферов
function createTripPointOffersTemplate(offers) {
  const offersTemplate = offers
    .filter((offer) => offer.isChecked)
    .map((offer) => //html
      `<li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
        +€&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </li>`).join('');
  return offersTemplate;
}

// создает разметку для точки маршрута
function createTripPointTemplate(point) {

  const {type, destination, dateFrom, dateTo, basePrice, offers, isFavorite} = point;
  const {name: destinationName} = destination;

  const eventDate = formatDateForPointsView(dateFrom);
  const startTime = formatTime(dateFrom);
  const endTime = formatTime(dateTo);
  const title = capitalizeString(type);
  const duration = calculateDuration(dateFrom, dateTo);
  const eventFavorite = isFavorite ? 'event__favorite-btn--active' : '';
  const offersTemplate = createTripPointOffersTemplate(offers);

  return ( //html
    `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${dateFrom}">${eventDate}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${title} ${destinationName}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dateFrom}">${startTime}</time>
          —
          <time class="event__end-time" datetime="${dateTo}">${endTime}</time>
        </p>
        <p class="event__duration">${duration}</p>
      </div>
      <p class="event__price">
        €&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${offersTemplate}
      </ul>
      <button class="event__favorite-btn ${eventFavorite}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
}

export default class TripPointView {
  constructor({ point }) {
    this.point = point;
  }

  getTemplate() {
    return createTripPointTemplate(this.point);
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
