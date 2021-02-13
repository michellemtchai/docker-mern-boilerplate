let common = require('./common');

module.exports = db = {
    modelFind: (model, res, next, options = {})=>{
        let query = model.find();
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
    },
    modelSave: (model, res, next)=>{
        model.save()
            .then(next)
            .catch(common.errorResponse(res));
    },
    renderAll: (model, res, options = {})=>{
        db.modelFind(model, res, i=>res.json(i), options);
    }
};
