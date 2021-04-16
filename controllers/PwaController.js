const Controller = require('../classes/Controller');
const manifestData = require('../assets/manifest');

module.exports = class PwaController extends Controller {
    /**
     * @api {get} %PUBLIC_URL%/manifest.json Get manifest.json
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
        res.sendFile(`${this.rootPath}/assets/robots.txt`);
    };

    /**
     * @api {get} /service-worker.js Get service-worker.js
     * @apiSampleRequest off
     * @apiVersion 1.0.0
     * @apiGroup PWA
     */
    sw = (req, res) => {
        res.sendFile(
            `${this.rootPath}/assets/service-worker.js`
        );
    };

    /**
     * @api {get} /service-worker.js.map Get service-worker.js.map
     * @apiSampleRequest off
     * @apiVersion 1.0.0
     * @apiGroup PWA
     */
    swMap = (req, res) => {
        res.sendFile(
            `${this.rootPath}/assets/service-worker.js.map`
        );
    };
};
