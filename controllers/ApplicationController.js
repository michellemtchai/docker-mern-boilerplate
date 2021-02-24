const Controller = require('../classes/Controller');

module.exports = class ApplicationController extends Controller {
    /**
     * @api {get} / Get index page
     * @apiSampleRequest off
     * @apiVersion 1.0.0
     * @apiGroup Application
     */
    index = (req, res) => {
        res.render('pages/index', {
            css: this.assets.css,
            scripts: this.assets.scripts,
        });
    }

    /**
     * @api {get} /robots.txt Get robots.txt
     * @apiSampleRequest off
     * @apiVersion 1.0.0
     * @apiGroup Application
     */
    robots = (req, res) => {
        res.type('text/plain');
        res.send("User-agent: *\nDisallow: /");
    }
};
