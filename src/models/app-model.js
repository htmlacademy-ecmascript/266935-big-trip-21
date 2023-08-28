import Model from './model.js';
import points from '../data/points.json';
import destinations from '../data/destinations.json';
import offerGroups from '../data/offers.json';
import PointModel from './point-model.js';

class AppModel extends Model {
  constructor(){
    super();

    /**
     * @type {Array<Point>}
     */
    this.points = [];

    /**
     * @type {Array<Destination>}
     */
    this.destinations = [];

    /**
     * @type {Array<OfferGroup>}
     */
    this.offerGroups = [];
  }

  /**
   * @returns {Promise<void>}
   */
  async ready() {
    // TODO: получение данных с сервера

    // @ts-ignore
    this.points = points;
    // @ts-ignore
    this.destinations = destinations;
    // @ts-ignore
    this.offerGroups = offerGroups;
  }

  /**
   * @returns {Array<PointModel>}
   */
  getPoints() {
    return this.points.map(this.createPoint);
  }

  /**
   * @param {Point} data
   * @returns {PointModel}
   */
  createPoint(data = Object.create(null)){
    return new PointModel(data);
  }

  /**
   * @param {PointModel} model
   * @returns {Promise<void>}
   */
  async updatePoint(model) {
    //TODO: нужно обновить данные на сервере

    const data = model.toJSON();
    const index = this.points.findIndex((point) => point.id === model.id);

    this.points.splice(index, 1, data);
  }

  /**
   * @returns {Array<Destination>}
   */
  getDestinations() {
    return structuredClone(this.destinations);
  }

  /**
   * @returns {Array<OfferGroup>}
   */
  getOfferGroups() {
    return structuredClone(this.offerGroups);
  }

}

export default AppModel;
