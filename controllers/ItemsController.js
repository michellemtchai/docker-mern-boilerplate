const Controller = require('../classes/Controller');
const common = require('../helpers/common');

module.exports = class ItemsController extends Controller {
    constructor(app){
        super(app);
        this.Item = this.models['Item'];
    }

    /**
     * @api {get} /items Get all items
     * @apiVersion 1.0.0
     * @apiGroup Item
     *
     * @apiSuccess {String} name Name of item.
     * @apiSuccess {Date} date Time this item was made.
     *
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     [{
     *       "name": "cats",
     *       "date": "1970-01-01T00:00:00.000Z"
     *     }]
     *
     * @apiErrorExample {json} Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "msg": "{error message}"
     *     }
     */
    index = (req, res) => {
        this.Item.renderAll(res, {
            sort: {
                date: -1
            },
            select: {
                __v: 0
            }
        });
     }

    /**
     * @api {post} /items Creates new item
     * @apiVersion 1.0.0
     * @apiGroup Item
     *
     * @apiParam {String} name Name of item.
     * @apiParamExample {json} Request-Example:
     *     {
     *       "name": "cats"
     *     }
     *
     * @apiSuccess {String} name Name of item.
     * @apiSuccess {Date} date Time this item was made.
     *
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     [{
     *       "name": "cats",
     *       "date": "1970-01-01T00:00:00.000Z"
     *     }]
     *
     * @apiErrorExample {json} Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "msg": "{error message}"
     *     }
     */
    create = (req, res) => {
        let required = ['name'];
        let createItem = ()=>{
            let permitted = common.permit(req.body, ['name']);
            this.Item.save(permitted, res, common.redirect(res, '/items'));
        };
        common.requiredParams(req.body, res, required, createItem);
    }
};