// central location to define routes
module.exports = (app) =>{
    let {
        ApplicationController,
        ItemsController,
    } = app.shared.controllers;

    /**
    *
    * You can start defining your routes below.
    *
    */
    app.router.get('/', ApplicationController.index);

    app.router.get('/items', ItemsController.index);
    app.router.post('/items', ItemsController.create);

    //The 404 Route (ALWAYS Keep this as the last route)
    app.router.get('*', ApplicationController.index);
};