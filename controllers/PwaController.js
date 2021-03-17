const Controller = require('../classes/Controller');
const manifestData = require('../assets/manifest');

module.exports = class PwaController extends Controller {
    /**
     * @api {get} /manifest.json Get manifest.json
     * @apiSampleRequest off
     * @apiVersion 1.0.0
     * @apiGroup PWA
     */
    manifest = (req, res) => {
        res.json(manifestData);
    };

    /**
     * @api {get} /robots.txt Get robots.txt
     * @apiSampleRequest off
     * @apiVersion 1.0.0
     * @apiGroup PWA
     */
    robots = (req, res) => {
        res.sendFile('/app/assets/robots.txt');
    };
};
