var book = require('../models/book');
var author = require('../models/author');
var bookinstance = require ('../models/bookinstance');
var genre = require ('../models/genre');

var async = require('async');

exports.index = (req, res) => {
    async.parallel({
        book_count:(callback) => {
            book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        }, 
        bookinstance_count:(callback) => {
            bookinstance.countDocuments({},callback);
        },
        bookinstance_available_count: (callback) => {
            bookinstance.countDocuments({status:'Available'}, callback);
        },
        author_count:(callback) => {
            author.countDocuments({}, callback);
        },
        genre_count:(callback) => {
            genre.countDocuments ({}, callback);
        }
    }), (err, results) => {
        res.render ('index', { title: 'Local library home', error:err, data: results})
    }
};

exports.books_list = (req, res) => {
    res.send ('NOT IMPLEMENTED: Book list view');
};

exports.book_details = (req, res) => {
    res.send ('NOT IMPLEMENTED: Book details view' + req.params.id);
};

exports.book_create_get = (req, res) => {
    res.send ('NOT IMPLEMENTED: Book create form get');
};

exports.book_create_post = (req, res) => {
    res.send ('NOT IMPLEMENTED: Book create form post');
};

exports.book_delete_get = (req, res) => {
    res.send ('NOT IMPLEMENTED: Book delete get');
};

exports.book_delete_post = (req, res) => {
    res.send ('NOT IMPLEMENTED: Book delete post');
};

exports.book_update_get = (req, res) => {
    res.send ('NOT IMPLEMENTED: Book update get');
};

exports.book_update_post = (req, res) => {
    res.send ('NOT IMPLEMENTED: Book update post');
};
