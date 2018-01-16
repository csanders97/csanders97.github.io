var express = require('express');

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
    console.log("Tester");
}