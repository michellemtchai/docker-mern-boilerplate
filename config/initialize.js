const bodyParser = require('body-parser');

module.exports = (app) =>{
    // parse request body
    app.router.use(bodyParser.urlencoded({extended: false}));
    app.router.use(bodyParser.json());

    // make static files in /public availiable
    app.router.use('/assets', app.express.static('public'));

    // set view engine as ejs
    app.router.set('view engine', 'ejs');
};