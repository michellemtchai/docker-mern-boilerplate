let common = require('./common');

module.exports = db = {
    modelFind: (model, res, next, options = {})=>{
        let conditions = options.query?
            options.query : {};
        let query = model.find(db.mergeConditions(conditions));
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
    },
    mergeConditions: (conditions)=>{
        if(common.isArray(conditions)){
            let combined = {};
            conditions.forEach(i=>combined = {...combined, ...i});
            console.log(combined);
            return combined;
        }
        else {
            return conditions;
        }
    },
    equals: (key, value)=>{
        return {[key]: value};
    },
    notEquals: (key, value)=>{
        return {[key]: {$ne: value}};
    },
    lessThan: (key, value)=>{
        return {[key]: {$lt: value}};
    },
    lessThanEquals: (key, value)=>{
        return {[key]: {$lte: value}};
    },
    greaterThan: (key, value)=>{
        return {[key]: {$gt: value}};
    },
    greaterThanEquals: (key, value)=>{
        return {[key]: {$gte: value}};
    },
    isIn: (key, arrayValue)=>{
        return {[key]: {$in: arrayValue}};
    },
    isNotIn: (key, arrayValue)=>{
        return {[key]: {$nin: arrayValue}};
    },
    or: (arrayConditions)=>{
        return {$or: arrayConditions};
    },
    not: (arrayConditions)=>{
        return {$not: arrayConditions};
    },
};
