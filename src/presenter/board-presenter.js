import { render, RenderPosition } from '../render.js';
import { getSortedPointsByDates } from '../util.js';
import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import TripInfoView from '../view/trip-info-view.js';
import TripPointEditView from '../view/trip-point-edit-view.js';
import TripPointView from '../view/trip-point-view.js';
import TripPointsListView from '../view/trip-points-list-view.js';

export default class BoardPresenter {

  constructor({ pointsModel }) {
    this.initContainers();
    this.pointsModel = pointsModel;
  }

  initContainers() {
    // инициализирует контейнеры для отрисовки элементов разметки
    this.tripPointsContainer = document.querySelector('.trip-events');
    this.tripInfoContainer = document.querySelector('.trip-main');
    this.tripFiltersContainer = document.querySelector('.trip-controls__filters');
    this.tripPointsListContainer = new TripPointsListView();
  }

  init() {
    this.boardPoints = getSortedPointsByDates([...this.pointsModel.getPoints()]);

    // Отрисовывает инфо о маршруте и фильтры
    render(new TripInfoView(), this.tripInfoContainer, RenderPosition.AFTERBEGIN);
    render(new FilterView(), this.tripFiltersContainer);

    // Отрисовывает сортировку и контейнер для списка точек маршрута
    render(new SortView(), this.tripPointsContainer);
    render(this.tripPointsListContainer, this.tripPointsContainer);

    // Отрисовывает форму редактирования
    render(new TripPointEditView({point: this.boardPoints[0]}), this.tripPointsListContainer.getElement());

    // Отрисовывает форму создания - пустая форма для редактирования
    // render(new TripPointEditView({}), this.tripPointsListContainer.getElement());

    // Отрисовывает три точки маршрута
    for (let i = 1; i < this.boardPoints.length; i++) {
      render(new TripPointView({point: this.boardPoints[i]}), this.tripPointsListContainer.getElement());
    }
  }
}

