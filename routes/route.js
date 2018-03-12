var mail = require('nodemailer'),
    keys = require('../config/keys');

exports.home = function(req, res) {
    res.render('home');
}

exports.about = function(req, res) {
    res.render('about');
}

exports.work = function(req, res) {
    res.render('work');
}

exports.resume = function(req, res) {
    res.render('resume');
}

exports.contact = function(req, res) {
    res.render('contact');
}

exports.sendMessage = function(req, res) {
    var name = req.body.name;
    var message = req.body.message;
    var transporter = mail.createTransport({
        service: 'gmail',
        auth: {
            user: keys.EMAIL,
            pass: keys.PASS
        }
    });
    var mailOptions = {
        from: keys.EMAIL,
        to: keys.EMAIL,
        subject: 'Caleb Sanders | Full-Stack Developer: Portfolio Comments',
        text: 'Greetings, \n\n' + '\t ' + message + '.\n\n Sincerely, \n' + name
    }; 
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        }
    });
    res.redirect('/');
}

exports.project = function(req, res) {
    res.render('project');
}

exports.pizza = function(req, res) {
    res.render('pizza-project/pizza.html');
}