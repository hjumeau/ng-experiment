'use strict';

import { BOOK_MODULE_NAME } from '../book.module.js';

class BookController {
	constructor($scope, $stateParams, BookModel) {
		// Find a list of Articles
		$scope.find = function() {
			BookModel.find().then((data) => {
				$scope.books = data;
			});
		};

		// Find existing Article
		$scope.findOne = function() {
			BookModel.findOne($stateParams.isbn).then((data) => {
				$scope.book = data;
			});
		};
	}
}

BookController.$inject = ['$scope', '$stateParams', 'BookModel'];

// Articles controller
angular.module(BOOK_MODULE_NAME).controller('BookController', BookController);
