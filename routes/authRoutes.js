var route = require('./route');
var bodyParser = require('body-parser');

module.exports = (app) => {
    
    var urlencodedParser = bodyParser.urlencoded({ extended: false });

    app.get('/', route.home);

    app.get('/about', route.about);

    app.get('/work', route.work);

    app.get('/resume', route.resume);

    app.get('/contact', route.contact);

    app.post('/contact', urlencodedParser, route.sendMessage);

    app.get('/project', route.project);

    app.get('/pizza', route.pizza);
}