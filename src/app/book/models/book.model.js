'use strict';

import { BOOK_MODULE_NAME } from '../book.module.js';

class BookModel {

	constructor(BookService) {
		//book promise
		this.books = null;
		this.bookService = BookService;
	}

	find() {
		this.books = this.bookService.get().then((data) => {
			return data;
		});
		return this.books;
	}

	findOne(isbn) {
		var desired = null;
		return this.books.then((data) => {
			data.some((book) => {
				if(book.isbn === isbn) {
					desired = book; 
				}
				return desired;
			});
			return desired;
		});
	}
}

angular.module(BOOK_MODULE_NAME).provider('BookModel', function() {
	this.$get = ['BookService', function(BookService) {
		return new BookModel(BookService);
	}];
});
