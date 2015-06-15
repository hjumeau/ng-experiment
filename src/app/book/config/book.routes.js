'use strict';

import { BOOK_MODULE_NAME } from '../book.module.js';

// Setting up route
angular.module(BOOK_MODULE_NAME).config(['$stateProvider', '$urlRouterProvider',
	($stateProvider, $urlRouterProvider) => {
		// Book state routing
		$urlRouterProvider.when('/book', '/book/list');
		$urlRouterProvider.when('/book/', '/book/list');

		var book = {
			name: 'book',
			abstract: true,
			url: '/book',
			controller: 'BookController',
			templateUrl: 'app/book/views/book-index.html'
		};
		var bookList = {
			name: 'book.list',
			url: '/list',
			controller: 'BookController',
			templateUrl: 'app/book/views/book-list.html'
		};
		var bookDetail = {
			name: 'book.detail',
			url: '/:isbn',
			controller: 'BookController',
			templateUrl: 'app/book/views/book-detail.html'
		};

		$stateProvider
			.state(book)
			.state(bookList)
			.state(bookDetail);
	}
]);