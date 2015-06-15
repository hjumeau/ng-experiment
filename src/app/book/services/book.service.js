'use strict';

import { BOOK_MODULE_NAME } from '../book.module.js';

class BookService {

	constructor($http) {
		
		this.SERVICE_URL = 'http://henri-potier.xebia.fr';
		this.http = $http;
	}

	get(){
		return this.http.get(this.SERVICE_URL+'/books').then((res) => {
			return Promise.resolve(res.data);
		}, (res) => {
			return Promise.reject(res.data);
		});
	}
}

BookService.$inject = ['$http'];

angular.module(BOOK_MODULE_NAME).service('BookService', BookService);