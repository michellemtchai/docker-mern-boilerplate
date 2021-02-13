// central location to define routes
module.exports = (app) =>{
    let {
        Application,
        Item,
    } = app.shared.controllers;

    /**
    *
    * You can start defining your routes below.
    *
    */
    app.router.get('/', Application.index);

    app.router.get('/items', Item.index);
    app.router.post('/items', Item.create);
};