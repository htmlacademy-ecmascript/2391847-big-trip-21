import { render, RenderPosition } from '../render.js';
import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import TripInfoView from '../view/trip-info-view.js';
import TripPointEditView from '../view/trip-point-edit-view.js';
import TripPointView from '../view/trip-point-view.js';
import TripPointsListView from '../view/trip-points-list-view.js';

const POINT_COUNT = 3;

export default class BoardPresenter {

  constructor() {
    this.initContainers();
  }

  initContainers() {
    this.tripPointsContainer = document.querySelector('.trip-events'); // Находит контейнер для сортировки и контента
    this.tripInfoContainer = document.querySelector('.trip-main'); // Находит контейнер для информации о маршруте
    this.tripFiltersContainer = document.querySelector('.trip-controls__filters'); // Находит контейнер для фильтров
    this.tripPointsListContainer = new TripPointsListView(); // Создаёт контейнер для списка точек маршрута
  }

  init() {
    render(new TripInfoView(), this.tripInfoContainer, RenderPosition.AFTERBEGIN); // Отрисовывает инфо о маршруте
    render(new FilterView(), this.tripFiltersContainer); // Отрисовывает фильтры

    render(new SortView(), this.tripPointsContainer); // Отрисовывает сортировку
    render(this.tripPointsListContainer, this.tripPointsContainer); // Отрисовывает контейнер для списка точек маршрута

    render(new TripPointEditView(), this.tripPointsListContainer.getElement()); // Отрисовывает форму создания

    for (let i = 0; i < POINT_COUNT; i++) { // Отрисовывает три точки маршрута
      render(new TripPointView(), this.tripPointsListContainer.getElement());
    }
  }
}
