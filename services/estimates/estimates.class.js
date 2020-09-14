const { Service } = require('feathers-sequelize');

exports.Estimates = class Estimates extends Service {

  setup(app) {
    this.app = app;
  }

  create (data, params) {

    const { estimateitems, ...estimateData } = data;

    const createEstimatePromise = super.create(estimateData, params);

    createEstimatePromise.then(result => {

      console.log('createEstimatePromise result');
      console.log(result);

      this.app.service('estimateitems').create({discount: 10, price: 1200, estimateid: 1, productid: 1}, params)
      .then(result => {
        console.log('estimateItemsResult');
        console.log(result)
      });
    })
    .catch(error => console.log(error));

    return createEstimatePromise;
  }
};
