/**
 * @template {import('../views/view').default} View
 * @template {import('../models/model').default} Model
 */
export default class Presenter {
  /**
   * @param {View} view
   * @param {Model} model
   */
  constructor(view, model) {
    this.view = view;
    this.model = model;

    window.queueMicrotask(() => this.updateView());
  }

  /**
   * @abstract
   */
  updateView() {}
}
