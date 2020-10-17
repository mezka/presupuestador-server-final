const nunjucks = require('nunjucks');
const wkhtmltopdf = require('wkhtmltopdf');
const tmp = require('tmp-promise');
const fs = require('fs');

nunjucks.configure('templates', {
  autoescape: true,
});

async function transformResponseDataToPdf(req, res) {

  try {
    var headerTempfile = await tmp.file({ postfix: '.html' });
    var footerTempfile = await tmp.file({ postfix: '.html' });
  } catch (error) {
    return res.send({ error });
  }

  try {
    nunjucks.render('mesquita-header.html', res.data, async function (error, headerContent) {
      if (!error) {
        try {
          await fs.promises.writeFile(headerTempfile.path, headerContent);
        } catch (error) {
          throw error;
        }
      } else {
        throw error;
      }
    });
  } catch (error) {
    headerTempfile.cleanup();
    return res.status(500).send({message: error.message});
  }

  try {
    nunjucks.render('mesquita-footer.html', res.data, async function (error, footerContent) {
      if (!error) {
        try {
          await fs.promises.writeFile(footerTempfile.path, footerContent);
        } catch (error) {
          throw error;
        }
      } else {
        throw error;
      }
    });
  } catch (error) {
    footerTempfile.cleanup();
    return res.status(500).send({message: error.message});
  }


  try{
    var estimateContent = nunjucks.render('mesquita-estimate.html', res.data);
  } catch (error){
    headerTempfile.cleanup();
    footerTempfile.cleanup();
    return res.status(500).send({message: error.message});
  }
  
  const wkHtmlToPdfOptions = { pageSize: 'A4', headerHtml: headerTempfile.path, footerHtml: footerTempfile.path, marginTop: 70, marginBottom: 50 };

  wkhtmltopdf(estimateContent, wkHtmlToPdfOptions, async function (error, stream) {
    res.type('application/pdf');
    if (!error) {
      stream.on('data', function (data) {
        res.write(data);
      });
      stream.on('end', function () {
        headerTempfile.cleanup();
        footerTempfile.cleanup();
        return res.status(200).end();
      });
    } else {
      headerTempfile.cleanup();
      footerTempfile.cleanup();
      return res.status(500).send({message: error.message});
    }
  });
}

module.exports = transformResponseDataToPdf;