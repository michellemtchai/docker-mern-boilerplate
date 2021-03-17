// central location to define routes
module.exports = (app) => {
    let {
        ApplicationController,
        PwaController,
        ItemsController,
    } = app.shared.controllers;

    /**
     *
     * You can start defining your routes below.
     *
     */
    app.router.get('/', ApplicationController.index);
    app.router.get('/robots.txt', PwaController.robots);
    app.router.get(
        process.env.APP_PUBLIC_URL + '/manifest.json',
        PwaController.manifest
    );
    if (process.env.APP_ENV === 'production') {
        app.router.get('/service-worker.js', PwaController.sw);
        app.router.get('/service-worker.js.map', PwaController.swMap);
    }

    app.router.get('/items', ItemsController.index);
    app.router.post('/items', ItemsController.create);
    app.router.put('/items/:id', ItemsController.update);
    app.router.delete('/items/:id', ItemsController.destroy);

    //The 404 Route (ALWAYS Keep this as the last route)
    app.router.get('*', ApplicationController.index);
};
