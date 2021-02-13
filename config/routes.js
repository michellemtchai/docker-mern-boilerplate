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

    //The 404 Route (ALWAYS Keep this as the last route)
    app.router.get('*', Application.index);
};