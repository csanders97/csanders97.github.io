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
    console.log(req.body.message);
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
        text: 'Greetings from ' + name + ' , /n ' + message
    }; 
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.redirect('/admin');
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