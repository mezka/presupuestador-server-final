const nunjucks = require('nunjucks');
const wkhtmltopdf = require('wkhtmltopdf');

nunjucks.configure('templates', {
    autoescape: true,
});

function transformResponseDataToPDF(req, res) {
    res.type('application/pdf');
    nunjucks.render('mesquita-estimate.html', res.data, function (error, content) {
        if (!error) {
            wkhtmltopdf(content, {}, function (error, stream) {
                if (!error) {
                    stream.on('data', function (data) {
                        res.write(data);
                    });
                    stream.on('end', function () {
                        res.status(200).end();
                    });
                } else {
                    res.end({error});
                }
            });
        } else {
            res.type('json');
            res.end({error});
        }
    });
};

module.exports = transformResponseDataToPDF;