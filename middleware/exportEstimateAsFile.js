const transformResponseDataToPdf = require('./transformResponseDataToPdf');

function exportEstimateAsFile(req, res, next) {
  switch (res.req.query.export) {
    case 'pdf':
      transformResponseDataToPdf(req, res, next);
      break;
    default:
      next();
  }
};


module.exports = exportEstimateAsFile;