const signInRouter = require('./sign-in');
const siteRouter = require('./site');

function route(app) {
    app.use('/sign-in', signInRouter);
    app.use('/', siteRouter)
}

module.exports = route;
