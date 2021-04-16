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
        if (process.env.APP_ENV === 'production') {
            res.sendFile(`${this.rootPath}/public/index.html`);
        } else {
            res.render('pages/index', {
                rootPath: this.rootPath,
                assets: {
                    js: [],
                    css: [],
                },
                icons: manifestData.icons,
            });
        }
    };
};
