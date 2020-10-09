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

  async update(id, data, params){
    const { estimateitems: estimateitemsArr, ...estimateData } = data;

    try{
      var estimateItemsToDelete = await this.app.service('estimateitems').find({ query: {estimateid: id}});
    } catch (error){
      return Promise.reject(error);
    }

    const estimateItemsDeletePromise = estimateItemsToDelete.map(item => {
      return this.app.service('estimateitems').remove(item.id, params);
    });

    try {
      var deletedEstimateItems = await Promise.all(estimateItemsDeletePromise);
    } catch (error){
      return Promise.reject(error);
    }

    const estimateItemsPromises = estimateitemsArr.map(item => {
      return this.app.service('estimateitems').create({...item, estimateid: id}, params);
    });

    try{
      var addedEstimateItems = await Promise.all(estimateItemsPromises);
    } catch (error){
      return Promise.reject(error);
    }

    return super.update(id, {...estimateData, userid: params.user.id}, params);
  }
};
