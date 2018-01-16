var route = require('./route');

module.exports = (app) => {
    
    app.get('/', route.home);

    app.get('/about', route.about);

    app.get('/work', route.work);

    app.get('/resume', route.resume);

    app.get('/contact', route.contact);
}