const Controller = require('../classes/Controller');
const manifestData = require('../assets/manifest');

module.exports = class ApplicationController extends Controller {
    /**
     * @api {get} / Get index page
     * @apiSampleRequest off
     * @apiVersion 1.0.0
     * @apiGroup Application
     */
    index = (req, res) => {
        res.render('pages/index', {
            icons: manifestData.icons,
            assets:
                process.env.APP_ENV === 'production'
                    ? require('../assets/files.json')
                    : null,
        });
    };
};
