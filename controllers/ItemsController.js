const Controller = require('../classes/Controller');

module.exports = class ItemsController extends Controller {
    Item = this.models['Item'];
    createRequired = ['name'];
    updateForbidden = ['_id'];

    /**
     * @api {get} /items Get all items
     * @apiVersion 1.0.0
     * @apiGroup Item
     *
     * @apiSuccess {Object[]} items List of Items.
     * @apiSuccess {String} items._id ID of item.
     * @apiSuccess {String} items.name Name of Item.
     * @apiSuccess {Date} items.created_at Time this Item was made.
     * @apiSuccess {Date} items.updated_at Time this Item was updated.
     */
    index = (req, res) => {
        this.renderAll(this.Item, res, {
            select: {
                __v: 0,
                created: 0,
                updated: 0,
            },
        });
    };

    /**
     * @api {post} /items Creates new item
     * @apiVersion 1.0.0
     * @apiGroup Item
     *
     * @apiParam {String} name Name of item.
     *
     * @apiSuccess {String} _id ID of item.
     * @apiSuccess {String} name Name of item.
     * @apiSuccess {Date} created_at Time this Item was made.
     * @apiSuccess {Date} updated_at Time this Item was updated.
     */
    create = (req, res) => {
        this.createModel(res, this.Item, req.body, (i) =>
            res.json(i)
        );
    };

    /**
     * @api {post} /items/:id Updates item with :id
     * @apiVersion 1.0.0
     * @apiGroup Item
     *
     * @apiParam {String} name Name of item.
     *
     * @apiSuccess {String} _id ID of item.
     * @apiSuccess {String} name Name of item.
     * @apiSuccess {Date} created_at Time this Item was made.
     * @apiSuccess {Date} updated_at Time this Item was updated.
     */
    update = (req, res) => {
        this.updateModelById(
            res,
            this.Item,
            req.params.id,
            req.body,
            (i) => res.json(i)
        );
    };

    /**
     * @api {get} /items Deletes item with :id
     * @apiVersion 1.0.0
     * @apiGroup Item
     *
     * @apiParam {String} id ID of item.
     *
     * @apiSuccess {String} _id ID of item.
     * @apiSuccess {String} name Name of item.
     * @apiSuccess {Date} created_at Time this Item was made.
     * @apiSuccess {Date} updated_at Time this Item was updated.
     */
    destroy = (req, res) => {
        this.Item.removeById(res, req.params.id, (i) =>
            res.json(i)
        );
    };
};
