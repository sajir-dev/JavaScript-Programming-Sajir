var Author = require("../models/author");

exports.author_list = (req, res) => {
  res.send("NOT IMPLEMENTED: Author List");
};

exports.author_details = (req, res) => {
  res.send("NOT IMPLEMENTED: Author Details" + req.params.id);
};

exports.author_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author Create Get form");
};

exports.author_create_post = (req, res) => {
    res.send ("NOT IMPLEMENTED: Author Create Post");
};

exports.author_delete_get = (req, res) => {
    res.send ("NOT IMPLEMENTED: Author delete get")
}

exports.author_delete_post = (req, res) => {
    res.send ("NOT IMPLEMENTED: Author delete post")
}

exports.author_update_get = (req, res) => {
    res.send ("NOT IMPLEMENTED: Author update get")
}

exports.author_update_post = (req, res) => {
    res.send ("NOT IMPLEMENTED: Author update post")
}