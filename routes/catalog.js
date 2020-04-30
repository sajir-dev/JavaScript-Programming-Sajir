var express = require ('express');
var router = express.Router();

var bookController = require ('../controllers/bookController');
var bookInstanceController = require ('../controllers/bookinstanceController');
var authorController = require ('../controllers/authorController');
var genreController = require ('../controllers/genreController');

router.get ('/', bookController.index);

router.get ('/book/create', bookController.book_create_get );

router.post ('/book/create', bookController.book_create_post);

router.get ('/books', bookController.books_list);

router.get ('book/:id', bookController.book_details)

router.get ('/book/:id/delete', bookController.book_delete_get);

router.post ('/book/:id/delete', bookController.book_delete_post);

router.get ('book/:id/update', bookController.book_update_get);

router.post ('book/:id/update', bookController.book_update_post);

//Author routes

router.get ('/author/create', authorController.author_create_get);

router.post ('/author/create', authorController.author_create_post);

router.get ('/authors', authorController.author_list);

router.get ('/author/:id', authorController.author_details);

router.get ('/author/:id/delete', authorController.author_delete_get);

router.post ('/author/:id/delete', authorController.author_delete_post);

router.get ('/author/:id/update', authorController.author_update_get);

router.post ('/author/:id/update', authorController.author_update_post);

//Genre routes

router.get ('genre/create', genreController.genre_create_get);

router.post ('genre/create', genreController.genre_create_post);

router.get ('/genres', genreController.genre_list);

router.get ('genre/:id', genreController.genre_details);

router.get ('genre/:id/update', genreController.genre_update_get);

router.post ('genre/:id/update', genreController.genre_update_post);

router.get ('/genre/:id/delete', genreController.genre_delete_get);

router.post ('/genre/:id/delete', genreController.genre_delete_post);

//BookInstance Routes

router.get ('/bookinstance/create', bookInstanceController.bookInstance_create_get);

router.post('/bookinstance/create', bookInstanceController.bookInstance_create_post);

router.get('/bookinstance/:id', bookInstanceController.bookInstance_details);

router.get ('/bookinstances', bookInstanceController.bookInstance_list);

router.get ('/bookinstance/:id/update', bookInstanceController.bookInstance_update_get)

router.post ('/bookinstance/:id/update', bookInstanceController.bookInstance_update_post);

router.get ('/bookinstance/:id/delete', bookInstanceController.bookInstance_delete_get);

router.post ('/bookinstance/:id/delete', bookInstanceController.bookInstance_delete_post);

module.exports = router;