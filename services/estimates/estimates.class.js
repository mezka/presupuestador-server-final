const { Service } = require('feathers-sequelize');

exports.Estimates = class Estimates extends Service {

  setup(app) {
    this.app = app;
  }

  create(data, params) {

    const { estimateitems, ...estimateData } = data;

    const createEstimatePromise = super.create(estimateData, params);

    createEstimatePromise.then(estimate => {
      const estimateItemsPromises = estimateitems.map(item => {
        return this.app.service('estimateitems').create({
          discount: item.discount ? item.discount : 0,
          price: item.price,
          estimateid: estimate.id,
          productid: item.productid
        }, params)
      });

      Promise.all(estimateItemsPromises);
    });

    return createEstimatePromise;
  }
};
