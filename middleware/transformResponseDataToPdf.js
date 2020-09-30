const nunjucks = require('nunjucks');
const wkhtmltopdf = require('wkhtmltopdf');
const temp = require('temp');
const fs = require('fs');
const os = require('os');

nunjucks.configure('templates', {
  autoescape: true,
});

function transformResponseDataToPDF(req, res) {
  res.type('application/pdf');
  nunjucks.render('mesquita-footer.html', res.data, function(error, footerContent){
    if (error) {
      res.type('json');
      res.end({ error });
    } else {
      temp.open({suffix: '.html'}, function (error, footerFileObject) {
        if (error) {
          res.type('json');
          res.end({ error });
        } else {
          fs.write(footerFileObject.fd, footerContent, (error) => {
            if(error){
              res.type('json');
              res.end({ error });
            }
          });
          fs.close(footerFileObject.fd, function (error) {
            if (error) {
              res.type('json');
              res.end({ error });
            } else {
              nunjucks.render('mesquita-header.html', res.data, function (error, headerContent) {
                if (error) {
                  res.type('json');
                  res.end({ error });
                } else {
                  temp.open({suffix: '.html'}, function (error, headerFileObject) {
                    if (error) {
                      res.type('json');
                      res.end({ error });
                    } else {
                      fs.write(headerFileObject.fd, headerContent, (error) => {
                        if(error){
                          res.type('json');
                          res.end({ error });
                        }
                      });
                      fs.close(headerFileObject.fd, function (error) {
                        if (error) {
                          res.type('json');
                          res.end({ error });
                        } else {
                          nunjucks.render('mesquita-estimate.html', res.data, function (error, estimateContent) {
                            if (error) {
                              res.type('json');
                              res.end({ error });
                            } else {
                              wkhtmltopdf(estimateContent, { pageSize: 'A4', headerHtml: headerFileObject.path, footerHtml: footerFileObject.path, marginTop: 70, marginBottom: 50 }, function (error, stream) {
                                if (error) {
                                  res.type('json');
                                  res.end({ error });
                                } else {
                                  stream.on('data', function (data) {
                                    res.write(data);
                                  });
                                  stream.on('end', function () {
                                    res.status(200).end();
                                  });
                                }
                              });
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });

  
}
module.exports = transformResponseDataToPDF;