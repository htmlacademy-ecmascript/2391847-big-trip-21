import { createElement } from '../render.js';
import { pointTypes, pointNames } from '../const.js';
import { capitalizeString, formatDateForPointEditView } from '../util.js';

// дефолтные данные для создания новой точки маршрута

const BLANK_POINT = {
  id: '',
  type: 'flight',
  destination: {},
  dateFrom: '',
  dateTo: '',
  basePrice: 0,
  offers: '',
  isFavorite: false,
};


// возвращает разметку для списка доступных типов точек маршрута
function createEventTypeTemplate(types) {
  let eventTypeTemplate = '';

  for (const type of types) {
    const typeName = capitalizeString(type);

    eventTypeTemplate += //html
    `<div class="event__type-item">
    <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}">
    <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${typeName}</label>
    </div>`;
  }
  return eventTypeTemplate;
}

// возвращает разметку для списка пунктов назначения
function createDestinationListTemplate(destinations) {
  const destinationListTemplate = destinations
    .map((destination) => /*html*/ `<option value="${destination}"></option>`).join('');

  return destinationListTemplate;
}

// создает темплейт разметки из массива офферов
function createOffersTemplate(offers) {
  if (!offers.length) {
    return '';
  }
  const offersTemplate = offers
    .map(({ title, price, name, isChecked }) => // html
      `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${name}-1" type="checkbox" name="event-offer-${name}" ${isChecked ? 'checked=""' : ''}>
        <label class="event__offer-label" for="event-offer-${name}-1">
          <span class="event__offer-title">${title}</span>
          +€&nbsp;
          <span class="event__offer-price">${price}</span>
        </label>
      </div>`
    ).join('');

  return offersTemplate;
}

// создает темплейт разметки для картинок
function createPicturesTemplate(pictures) {
  if (!pictures.length) {
    return '';
  }

  const picturesTemplate = pictures
    .map(({src, description}) => /*html*/ `<img class="event__photo" src="${src}" alt="${description}">`).join('');

  return picturesTemplate;
}

// возвращает разметку для формы редактирования
function createTripPointEditTemplate(point) {

  const {type, destination, dateFrom, dateTo, basePrice, offers} = point;
  const {name: destinationName = '', description: destinationDescription = '', pictures = ''} = destination;

  const startTime = formatDateForPointEditView(dateFrom);
  const endTime = formatDateForPointEditView(dateTo);
  const eventTypeName = capitalizeString(type);

  const eventTypeTemplate = createEventTypeTemplate(pointTypes);
  const destinationListTemplate = createDestinationListTemplate(pointNames);
  const offersTemplate = createOffersTemplate(offers);
  const picturesTemplate = createPicturesTemplate(pictures);

  return ( //html
    `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${eventTypeTemplate}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${eventTypeName}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destinationName}" list="destination-list-1">
          <datalist id="destination-list-1">
            ${destinationListTemplate}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startTime}">
          —
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endTime}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            €
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Cancel</button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
          ${offersTemplate}
          </div>
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${destinationDescription}</p>

          <div class="event__photos-container">
            <div class="event__photos-tape">
            ${picturesTemplate}
            </div>
          </div>
        </section>
      </section>
    </form>
  </li>`
  );
}

export default class TripPointEditView {
  constructor({ point = BLANK_POINT }) {
    this.point = point;
  }

  getTemplate() {
    return createTripPointEditTemplate(this.point);
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
