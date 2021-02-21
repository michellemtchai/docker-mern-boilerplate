module.exports = class Controller {
    constructor(app){
        this.models = app.shared.models;
        this.css = app.shared.css;
        this.scripts = app.shared.scripts;
        this.assets = app.shared.assets;
    }
};