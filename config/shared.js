const fs = require('fs');
const Model = require('../classes/Model');
let models = {};
let controllers = {};
let css = [];
let scripts = [];
let assets = [];

module.exports = self = {
    models: models,
    controllers: controllers,
    css: css,
    scripts: scripts,
    assets: assets,
    createModel: (name, schema)=>{
        return new Model(name, schema);
    },
    getAssets: ()=>{
        fs.readdirSync('public').forEach(file=>{
            let parts = file.split('.');
            let extension = parts[parts.length-1];
            switch(extension){
                case 'css':
                    css.push(file);
                    break;
                case 'js':
                    scripts.push(file);
                    break;
                default:
                    assets.push(file);
                    break;
            }
        });
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
