const { Service } = require('feathers-sequelize');

exports.Estimates = class Estimates extends Service {

  setup(app) {
    this.app = app;
  }

  async create(data, params){
    const { estimateitems: estimateitemsArr, ...estimateData } = data;

    try{
      var estimate = await super.create({...estimateData, userid: params.user.id}, params);
    } catch (error){
      return Promise.reject(error);
    }

    const estimateItemsPromises = estimateitemsArr.map(item => {
      return this.app.service('estimateitems').create({...item, estimateid: estimate.id}, params);
    });

    try{
      var estimateitems = await Promise.all(estimateItemsPromises)
    } catch (error){
      return Promise.reject(error);
    }

    return Promise.resolve({...estimate, estimateitems})
  }
};
