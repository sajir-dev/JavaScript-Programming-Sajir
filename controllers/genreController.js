var genre = require ('../models/genre');

exports.genre_list = (req, res) => {
    res.send ('NOT IMPLEMENTED: genre list view');
};

exports.genre_details = (req, res) => {
    res.send ('NOT IMPLEMENTED: genre details view' + req. params.id);
};

exports.genre_create_get =(req, res) => {
    res.send ('NOT IMPLEMENTED: genre create get');
};

exports.genre_create_post = (req, res) => {
    res.send ('NOT IMPLEMENTED: genre create post');
};

exports.genre_delete_get = (req, res) => {
    res.send ('NOT IMPLEMENTED: genre delete get');
};

exports.genre_delete_post = (req, res) => {
    res.send ('NOT IMPLEMENTED: genre delete post');
};

exports.genre_update_get = (req, res) => {
    res.send ('NOT IMPLEMENTED: genre update get');
};

exports.genre_update_post = (req, res) => {
    res.send ('NOT IMPLEMENTED: genre update post')
}