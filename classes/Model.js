const mongoose = require('mongoose');
const common = require('../helpers/common');
const db = require('../helpers/db');

module.exports = class Model {
    constructor(name, schema){
        this.model = mongoose.model(name,
            new mongoose.Schema(schema)
        );
    }

    find = (res, next, options = {})=>{
        let conditions = options.query?
            options.query : {};
        let query = this.model.find(mergeConditions(conditions));
        if(common.hasKey(options, 'sort')){
            query = query.sort(options.sort);
        }
        if(common.hasKey(options, 'limit')){
            query = query.limit(options.limit);
        }
        if(common.hasKey(options, 'select')){
            query = query.select(options.select);
        }
        query
            .then(next)
            .catch(common.errorResponse(res));
    }

    findById = (res, next, id) =>{
        this.find(res, next, {
            query: [
                db.equals('_id', id)
            ],
            limit: 1
        });
    }

    save = (params, res, next)=>{
        let model = new this.model(params);
        model.save()
            .then(next)
            .catch(common.errorResponse(res));
    }

    renderAll = (res, options = {})=>{
        this.find(res, i=>res.json(i), options);
    }

    renderOneWithId = (res, id)=>{
        this.findById(res, i=>res.json(i), id);
    }
};

// private functions
const mergeConditions = (conditions)=>{
    if(common.isArray(conditions)){
        let combined = {};
        conditions.forEach(i=>combined = {...combined, ...i});
        return combined;
    }
    else {
        return conditions;
    }
}
