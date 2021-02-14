const fs = require('fs');
const Model = require('../classes/Model');
let models = {};
let controllers = {};

module.exports = self = {
    models: models,
    controllers: controllers,
    createModel: (name, schema)=>{
        return new Model(name, schema);
    },
    fileAction: (dir, action)=>{
        fs.readdirSync(dir).forEach(file=>
            action(
                file.substring(0, file.length-3)
            )
        );
    },
    importModels: (app)=>{
        self.fileAction('models', (file)=>{
            models[file] = require('../models/'+file)(app);
        });
    },
    importControllers: (app)=>{
        self.fileAction('controllers', (file)=>{
            let controller = require('../controllers/'+file);
            controllers[file] = new controller(app);
        });
    },
};
