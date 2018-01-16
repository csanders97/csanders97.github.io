var express = require('express');

exports.home = function(req, res) {
    res.render('home');
}

exports.work = function(req, res) {
    res.render('work');
}