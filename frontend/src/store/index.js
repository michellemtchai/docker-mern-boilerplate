if (process.env.REACT_APP_ENV === 'production') {
    module.exports = require('./conf.prod');
} else {
    module.exports = require('./conf.dev');
}
