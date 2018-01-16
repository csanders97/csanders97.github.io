var route = require('./route');

module.exports = (app) => {
    
    app.get('/', route.home);

    app.get('/work', route.work);
}